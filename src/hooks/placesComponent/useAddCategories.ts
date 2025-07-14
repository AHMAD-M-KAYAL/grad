import { useMutation,useQueryClient} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  AddCategoryForm,
  CategoryPlacesSchema,
} from "../../Schema/CategoryPlacesSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "../../services/api-client";
import { useState } from "react";

const useAddCategories = () => {
  const queryclient=useQueryClient();
  const [success,setSuccess]=useState<boolean>(false)
  const [errorSentData,setErrorSentData,]=useState<boolean>(false)
  const form = useForm<AddCategoryForm>({
    resolver: zodResolver(CategoryPlacesSchema),
  });

  const mutation = useMutation({
    mutationKey: ["addCategory"],
    mutationFn: async (data: AddCategoryForm) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("title_ar", data.title_ar);
      formData.append("type", data.type);
      // حماية من رفع صورة غير موجودة:
      if (data.icon && data.icon[0]) {
        formData.append("icon", data.icon[0]);
      }

      return apiClient
        .post("/api/categories", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      console.log("Category added!", data);
      setSuccess(true);
      queryclient.invalidateQueries(["/api/categories"]);

      setTimeout(()=>{
              setSuccess(false);
            setErrorSentData(false);},3000)
       // form.reset(); // إذا تريد إعادة تعيين الحقول بعد النجاح
    },
    onError: ( ) => {
      setErrorSentData(true);
    setTimeout(()=>{
             setErrorSentData(false);},2000)
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return {
    ...form,
    onSubmit,
    mutation,
    success,errorSentData
  };
};

export default useAddCategories;
