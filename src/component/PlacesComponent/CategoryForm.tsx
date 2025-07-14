import useAddCategories from "../../hooks/placesComponent/useAddCategories";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Success from "../messages/Success";
import { Box } from "@mui/material";
import ErrorMessage from "../messages/ErrorMessage";

export const CategoryForm = () => {
  const {
    register,
    onSubmit,
    formState: { errors },
    mutation,
    success,
    errorSentData,
  } = useAddCategories();

  return (
    <>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div
          className="text-center mb-2"
          style={{
            color: "var(--bs-primary-text-emphasis)",
            fontWeight: "Bold",
          }}
        >
          ADD NEW CATEGORY
        </div>
        <input
          className="form-control mb-1"
          type="text"
          placeholder="title"
          {...register("title")}
        />
        {errors.title && (
          <span className="text-danger">{errors.title.message}</span>
        )}
        <input
          className="form-control mb-1"
          type="text"
          placeholder="title_arabic"
          {...register("title_ar")}
        />
        <input
          className="form-control mb-1"
          type="text"
          placeholder="type"
          {...register("type")}
        />

        <Box sx={{ display: "flex", flexDirection: "column " }}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Photo
            <input {...register("icon")} type="file" hidden multiple />
          </Button>
          <button
            type="submit"
            className="btn btn-outline-primary m-2"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Adding..." : "Add Category"}
          </button>
        </Box>

        {errorSentData && <ErrorMessage />}
        {success && <Success />}
      </form>
    </>
  );
};
