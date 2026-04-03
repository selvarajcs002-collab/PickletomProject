export const flattenSkills = (data: any): string[] => {
    const result: string[] = [];

    const traverse = (obj: any) => {
        if (Array.isArray(obj)) {
            result.push(...obj);
        } else if (typeof obj === "object") {
            Object.values(obj).forEach(traverse);
        }
    };

    traverse(data);
    return [...new Set(result)];
};