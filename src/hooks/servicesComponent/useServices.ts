import useData from "../useGetData";
interface ServiceImage{
    id:number,
    image:string,
    service_id:number,
};
export  interface Service{
    id:number,
    price:number,
    duration:number,
    title:string,
    tag:string,
    rating:string,
    service_images:ServiceImage[ ]
}
 
export const  useServices = () => useData<Service>("/api/services")