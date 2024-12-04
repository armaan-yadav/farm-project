import { appwriteConfig, client } from "@/lib/appwrite/appwrite";
import { ID, Storage } from "appwrite";

class StorageServices {
  private storage;

  constructor() {
    this.storage = new Storage(client);
  }

  async uploadFiles(images: File[]): Promise<string[]> {
    
    // Add initial validation
    if (!images || !Array.isArray(images) || images.length === 0) {
      console.error("No images provided to uploadFiles");
      return [];
    }

    try {
      // Validate each image before upload
      const validImages = images.filter((image) => {
        if (!image) {
          console.warn("Encountered null or undefined image");
          return false;
        }
        if (!(image instanceof File)) {
          console.warn("Non-File object encountered", image);
          return false;
        }
        if (image.size === 0) {
          console.warn(`Empty file encountered: ${image.name}`);
          return false;
        }
        return true;
      });

      console.log(
        `Uploading ${validImages.length} valid images out of ${images.length} total`
      );

      // Use Promise.all to handle multiple file uploads concurrently
      const uploadPromises = validImages.map(async (image) => {
        try {
          console.log("Uploading", image.name);

          // Create a file in Appwrite storage
          const res = await this.storage.createFile(
            appwriteConfig.bucketId,
            ID.unique(),
            image
          );

          // Get the download URL for the uploaded file
          const url = await this.getFileDownloadUrl(res.$id);

          return url;
        } catch (uploadError) {
          console.error(`Error uploading file ${image.name}:`, uploadError);
          // Depending on your error handling strategy, you might:
          // 1. Throw to stop entire upload process
          // 2. Skip this file and continue
          // Here, we'll log and rethrow, but you can modify as needed
          throw uploadError;
        }
      });

      // Wait for all uploads to complete and collect their URLs
      const imagesUrl = await Promise.all(uploadPromises);
      console.log("Successfully uploaded image URLs:", imagesUrl);
      return imagesUrl;
    } catch (error) {
      console.error("Error in uploadFiles:", error);
      // Depending on your error handling strategy, you might:
      // 1. Return an empty array
      // 2. Rethrow the error
      // 3. Return partial results
      return [];
    }
  }

  async getFileDownloadUrl(fileID: string): Promise<string> {
    try {
      const res = await this.storage.getFileDownload(
        appwriteConfig.bucketId,
        fileID
      );

      return res;
    } catch (error) {
      console.error(`Error getting download URL for file ${fileID}:`, error);
      throw error;
    }
  }
}

const storageServices = new StorageServices();

export default storageServices;
