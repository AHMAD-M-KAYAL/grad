import useGetData from "../useGetData";

export interface Category {
    id: number,
    title: string,
    icon: string,
    type: string,
 }

const useGetCategories = () => useGetData<Category>("/api/categories");

export default useGetCategories;
