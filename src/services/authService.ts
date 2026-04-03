export interface User {
    id: string;
    email?: string;
    [key: string]: any;
}

export interface Session {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    user?: User;
}

const SESSION_KEY = 'supabase_auth_token';

export const authService = {
    setSession(session: Session) {
        const expiresAt = new Date().getTime() + (session.expires_in * 1000);
        const sessionData = { ...session, expiresAt };
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    },

    getSession(): (Session & { expiresAt: number }) | null {
        const sessionStr = localStorage.getItem(SESSION_KEY);
        if (!sessionStr) return null;
        try {
            return JSON.parse(sessionStr);
        } catch (e) {
            return null;
        }
    },

    clearSession() {
        localStorage.removeItem(SESSION_KEY);
    },

    isAuthenticated(): boolean {
        const session = this.getSession();
        if (!session) return false;
        // Buffer of 60s
        return new Date().getTime() < (session.expiresAt - 60000);
    },

    getAccessToken(): string | null {
        const session = this.getSession();
        return session ? session.access_token : null;
    },

    getRefreshToken(): string | null {
        const session = this.getSession();
        return session ? session.refresh_token : null;
    },

    needsRefresh(): boolean {
        const session = this.getSession();
        if (!session) return false;
        // Refresh if less than 5 minutes remaining
        const fiveMinutes = 5 * 60 * 1000;
        return new Date().getTime() > (session.expiresAt - fiveMinutes);
    }
};
