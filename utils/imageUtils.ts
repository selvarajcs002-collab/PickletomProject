import { BASE_URL } from '../services/api';

/**
 * Normalizes an image URL to ensure it points to the current active BASE_URL.
 * This prevents broken images if the database saved an absolute URL with an old IP address.
 */
export const getAbsoluteUrl = (url?: string | null): string | null => {
    if (!url || url === '—') return null;
    
    // If it's an upload, force it to use the current active BASE_URL root.
    // This fixes issues where the DB saved an old IP address (e.g., http://192.168.x.x/uploads/...)
    const uploadIndex = url.indexOf('/uploads/');
    if (uploadIndex !== -1) {
        const relativePath = url.substring(uploadIndex);
        const rootUrl = BASE_URL.replace(/\/api\/?$/, '');
        return `${rootUrl}${relativePath}`;
    }

    if (url.startsWith('http') || url.startsWith('file://')) return url;
    
    const rootUrl = BASE_URL.replace(/\/api\/?$/, '');
    return url.startsWith('/') ? `${rootUrl}${url}` : `${rootUrl}/${url}`;
};
