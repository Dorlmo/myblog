import fs from 'fs';

export const isURL = (path: string): boolean => {
    try {
        new URL(path);
        return true;
    } catch (_err) {
        return false;
    }
}

export const fileReachable = (path: string): boolean => {
    try {
        fs.accessSync(path);
        return true;
    }
    catch (_err) {
        return false;
    }
}