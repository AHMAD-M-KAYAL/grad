import { useMutation,useQueryClient  } from "@tanstack/react-query";
  import apiClient from "../services/api-client";
const useDeleteById = <T>(endPoint:string) => {
    const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [""],
    mutationFn: async (id:number) => {
      return apiClient
        .delete<T>(endPoint+`/${id}`)
        .then((res) => res.data);
    },
    onSuccess: ( data) => {
      console.log("data deleted",data);
    queryClient.invalidateQueries(["/api/categories"]);

     },
    onError: (error ) => {
          console.log("can not deleted data",error);
    },
  });
return {mutation}
};
 
export default useDeleteById;
