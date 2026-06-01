import http from "./httpClient";

export interface NotificationItem {
    notificationId: number;
    userId: number;
    actorUserId: number;
    type: "FOLLOW" | "CONNECT_REQUEST" | "CONNECT_ACCEPTED" | "LIKE" | "COMMENT";
    message: string | null;
    referenceId: number | null;
    isRead: boolean;
    createdAt: string;
    actorName: string;
    actorAvatar: string | null;
}

export const notificationService = {
    /** Fetch recent notifications for a user */
    getNotifications: async (userId: number): Promise<NotificationItem[]> => {
        try {
            const res = await http.get(`/Notification/${userId}`);
            return res?.data ?? [];
        } catch {
            return [];
        }
    },

    /** Get unread notification count */
    getUnreadCount: async (userId: number): Promise<number> => {
        try {
            const res = await http.get(`/Notification/count/${userId}`);
            return res?.count ?? 0;
        } catch {
            return 0;
        }
    },

    /** Mark all notifications as read */
    markAllRead: async (userId: number): Promise<boolean> => {
        try {
            const res = await http.post("/Notification/markRead", { userId });
            return res?.success ?? false;
        } catch {
            return false;
        }
    },
};
