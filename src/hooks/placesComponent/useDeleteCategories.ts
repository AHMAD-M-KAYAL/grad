import useDeleteById from "../useDeleteById";
import { Category } from "./useGetCategories"
 
 
export const useDeleteCategories =  (  ) => useDeleteById<Category>(`/api/categories`);

export default useDeleteCategories

 