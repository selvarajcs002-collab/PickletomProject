import http from "./httpClient";

export interface UserSearchResult {
    userId: number;
    fullName: string;
    avatar?: string | null;
    location?: string | null;
    playingLevel?: string | null;
    followerCount: number;
    connectionCount: number;
    isFollowedByMe: boolean;
    isConnectedByMe: boolean;
    isConnectionAccepted: boolean;
}

export interface PublicProfile extends UserSearchResult {
    coverImage?: string | null;
    gender?: string | null;
    age?: string | null;
    startedPlayingMonth?: string | null;
    startedPlayingYear?: string | null;
    powerHand?: string | null;
    backhandType?: string | null;
    duprLink?: string | null;
    favoriteCourts?: string | null;
    followingCount: number;
}

export const userSearchService = {
    searchUsers: async (query: string, requestingUserId?: number): Promise<UserSearchResult[]> => {
        try {
            const q = requestingUserId
                ? `/UserSearch/search?q=${encodeURIComponent(query)}&requestingUserId=${requestingUserId}`
                : `/UserSearch/search?q=${encodeURIComponent(query)}`;
            const res = await http.get(q);
            return res?.data ?? [];
        } catch { return []; }
    },

    getPublicProfile: async (userId: number, requestingUserId?: number): Promise<PublicProfile | null> => {
        try {
            const q = requestingUserId
                ? `/UserSearch/profile/${userId}?requestingUserId=${requestingUserId}`
                : `/UserSearch/profile/${userId}`;
            const res = await http.get(q);
            return res?.data ?? null;
        } catch { return null; }
    },

    follow: async (requesterId: number, receiverId: number): Promise<{ success: boolean; message: string }> => {
        try { return await http.post("/UserSearch/connect", { requesterId, receiverId, mode: "FOLLOW" }); }
        catch (e: any) { return { success: false, message: e.message || "Failed" }; }
    },

    unfollow: async (requesterId: number, receiverId: number): Promise<{ success: boolean; message: string }> => {
        try { return await http.post("/UserSearch/connect", { requesterId, receiverId, mode: "UNFOLLOW" }); }
        catch (e: any) { return { success: false, message: e.message || "Failed" }; }
    },

    connect: async (requesterId: number, receiverId: number): Promise<{ success: boolean; message: string }> => {
        try { return await http.post("/UserSearch/connect", { requesterId, receiverId, mode: "CONNECT" }); }
        catch (e: any) { return { success: false, message: e.message || "Failed" }; }
    },

    acceptConnection: async (requesterId: number, receiverId: number): Promise<{ success: boolean; message: string }> => {
        // Here requesterId is the user who is ACCEPTING (current user)
        // receiverId is the user who SENT the request
        try { return await http.post("/UserSearch/connect", { requesterId, receiverId, mode: "ACCEPT_CONNECTION" }); }
        catch (e: any) { return { success: false, message: e.message || "Failed" }; }
    },

    declineConnection: async (requesterId: number, receiverId: number): Promise<{ success: boolean; message: string }> => {
        // receiverId is the user who SENT the request
        try { return await http.post("/UserSearch/connect", { requesterId, receiverId, mode: "DECLINE_CONNECTION" }); }
        catch (e: any) { return { success: false, message: e.message || "Failed" }; }
    },

    getFollowers: async (userId: number, requestingUserId?: number): Promise<UserSearchResult[]> => {
        try {
            const q = requestingUserId ? `/UserSearch/${userId}/followers?requestingUserId=${requestingUserId}` : `/UserSearch/${userId}/followers`;
            const res = await http.get(q);
            return res?.data ?? [];
        } catch { return []; }
    },

    getFollowing: async (userId: number, requestingUserId?: number): Promise<UserSearchResult[]> => {
        try {
            const q = requestingUserId ? `/UserSearch/${userId}/following?requestingUserId=${requestingUserId}` : `/UserSearch/${userId}/following`;
            const res = await http.get(q);
            return res?.data ?? [];
        } catch { return []; }
    },

    getConnections: async (userId: number, requestingUserId?: number): Promise<UserSearchResult[]> => {
        try {
            const q = requestingUserId ? `/UserSearch/${userId}/connections?requestingUserId=${requestingUserId}` : `/UserSearch/${userId}/connections`;
            const res = await http.get(q);
            return res?.data ?? [];
        } catch { return []; }
    },
};
