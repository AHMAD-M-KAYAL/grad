import useGetData from "../useGetData";

export interface Category {
  id: number;
  title: string;
  icon: string;
  type: string;
}

const useCategoriesArabic = () =>
  useGetData<Category>("/api/categories?language=ar");

export default useCategoriesArabic;
