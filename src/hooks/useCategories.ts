import useGetData from "./useGetData";

export interface Category {
    id: number;
    title: string;
    icon: string;
    type: string;
}

const useCategories = () => useGetData<Category>("/api/categories");

export default useCategories;
