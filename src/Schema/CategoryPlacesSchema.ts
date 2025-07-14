import { z } from "zod";
export const CategoryPlacesSchema = z.object({
  title: z.string(),
  title_ar:z.string(),
  type: z.string(),
  icon: z.any(), 
});
export type AddCategoryForm = z.infer<typeof CategoryPlacesSchema>;
