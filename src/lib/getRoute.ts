export function getRoutePath(...atrri: String[]): string {
    const path = import.meta.env.BASE_URL + atrri.join('/');
    return path.replace(/\/+/g, "/");
}