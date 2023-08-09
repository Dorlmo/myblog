
export const  joinRoutes = (...routes:string[]):string=>{
    return `${import.meta.env.BASE_URL}/${routes.join('/')}`.replace(/\/+/g, '/');
}