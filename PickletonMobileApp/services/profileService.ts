import http from "./httpClient";
import { BASE_URL } from "./api";

export interface ProfileData {
  fullName: string;
  age: string;
  gender: string;
  playingLevel: string;
  location: string;
  startedPlayingMonth: string;
  startedPlayingYear: string;
  duprLink: string;
  favoriteCourts: string;
  coverImage?: string;
  avatarImage?: string;
  playStyle?: string;
  preferredType?: string;
  duprRating?: string;
  selectedSkills?: string[];
  highlights?: (string | null)[];
}

export const profileService = {
  getProfile: async (userId: number): Promise<any> => {
    return await http.get(`/Profile/${userId}`);
  },

  signUp: async (Email_Id: string, Password: string) => {
    return await http.post("/signUp", { Email_Id, Password });
  },

  updateProfile: async (profileData: ProfileData) => {
    return await http.post("/Profile/UpdateProfile", profileData);
  },

  uploadImage: async (imageUri: string, type: "cover" | "avatar") => {
    const formData = new FormData();
    const filename = imageUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename || "");
    const ext = match ? `image/${match[1]}` : "image";

    formData.append("file", {
      uri: imageUri,
      name: filename,
      type: ext,
    } as any);
    formData.append("type", type);

    return await fetch(`${BASE_URL}/Profile/UploadImage`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => res.json());
  },

  uploadSingle: async (fileUri: string, fileType: "profile" | "cover") => {
    const formData = new FormData();
    const filename = fileUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename || "");
    const ext = match ? `image/${match[1]}` : "image";

    formData.append("file", {
      uri: fileUri,
      name: filename,
      type: ext,
    } as any);
    formData.append("fileType", fileType);

    return await fetch(`${BASE_URL}/upload/single`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => res.json());
  },

  uploadMultiple: async (fileUris: string[]) => {
    const formData = new FormData();

    fileUris.forEach((uri, index) => {
      const filename = uri.split("/").pop();
      const match = /\.(\w+)$/.exec(filename || "");
      const ext = (match && match[1] === 'mp4') ? 'video/mp4' : 'image/jpeg';

      formData.append("files", {
        uri: uri,
        name: filename || `file_${index}`,
        type: ext,
      } as any);
    });

    return await fetch(`${BASE_URL}/upload/multiple`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => res.json());
  },

  saveProfile: async (payload: any) => {
    return await http.post("/Profile/SaveOnboardingProfile", payload);
  }
};
