import { appwriteConfig, client } from "@/lib/appwrite/appwrite";
import { Client, Databases, ID, Models } from "appwrite";
import { AuthError } from "./errors";
import { User, UserData } from "@/types";
import { authServices } from "./authServices";

class DbServices {
  private client: Client;
  private databases: Databases;

  constructor() {
    this.client = client;
    this.databases = new Databases(this.client);
  }

  async addUserIntoDatabase({ user }: { user: UserData }) {
    try {
      const u = await authServices.getCurrentUser();
      if (!u) {
        throw "User not signed in";
      }
      const res = await this.databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        u.$id,
        { ...user, accountId: u.$id }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
      throw AuthError.fromAppwriteError(error);
    }
  }

  async getUserFromDb(): Promise<User> {
    try {
      const u = await authServices.getCurrentUser();
      if (!u) {
        throw "User is not signed in";
      }

      const user = await this.databases.getDocument<User>(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        u?.$id
      );

      return user;
    } catch (error) {
      throw AuthError.fromAppwriteError(error);
    }
  }
}

const dbServices = new DbServices();
export default dbServices;
