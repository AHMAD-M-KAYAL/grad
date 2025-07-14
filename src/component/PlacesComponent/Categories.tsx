import { Box } from "@mui/material";
import useGetCategories from "../../hooks/placesComponent/useGetCategories";
import useCategoriesArabic from "../../hooks/placesComponent/useCategoriesArabic";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CategoryDialog from "../Dialogs/CategoryDialog";
import useDeleteCategories from "../../hooks/placesComponent/useDeleteCategories";

const Categories = () => {
  const { mutation } = useDeleteCategories();
  const { data, error, isLoading } = useGetCategories();
  const { data: dataArabic } = useCategoriesArabic();

  const mergeRow =
    data?.map((en) => {
      const searchinArabic = dataArabic?.find((ar) => ar.id === en.id);
      return {
        ...en,
        title_en: en.title,
        title_ar: searchinArabic?.title,
      };
    }) ?? [];

  // الأعمدة يجب أن تكون داخل الكومبوننت لتستخدم mutation
  const columns: GridColDef<any>[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "title_en", headerName: "Title (EN)", width: 180 },
    { field: "title_ar", headerName: "Title (AR)", width: 180 },
    {
      field: "icon",
      headerName: "Icon",
      width: 80,
      renderCell: (params) =>
        params.value ? (
          <img
            src={params.value}
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        ) : (
          <span style={{ color: "#888" }}>No Icon</span>
        ),
    },
    { field: "type", headerName: "Type", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            console.log("Deleting row:", params.row);
            mutation.mutate(params.row.id); // هذا هو السطر المهم
          }}
        >
          delete
        </button>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <CategoryDialog />
      <DataGrid
        rows={mergeRow}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        sx={{ fontSize: 18 }}
      />
    </Box>
  );
};

export default Categories;
