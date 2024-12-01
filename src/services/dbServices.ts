import { appwriteConfig, client } from "@/lib/appwrite/appwrite";
import { Client, Databases, ID } from "appwrite";
import { AuthError } from "./errors";
import { User } from "@/types";

class DbServices {
  private client: Client;
  private databases: Databases;

  constructor() {
    this.client = client;
    this.databases = new Databases(this.client);
  }

  async addUserIntoDatabase({ user }: { user: User }) {
    try {
      console.log(user);
      const res = await this.databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        user
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      throw AuthError.fromAppwriteError(error);
    }
  }
}

const dbServices = new DbServices();
export default dbServices;
