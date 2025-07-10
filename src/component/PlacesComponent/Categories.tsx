import { Box } from "@mui/material";
import useCategories, { Category } from "../../hooks/useCategories";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<Category>[] = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: false,
  },
  {
    field: "icon",
    headerName: "Icon",
    width: 250,
    renderCell: (params) => (
      <img
        src={params.value}
        // alt={params.row.title}
        style={{ width: 40, height: 40, objectFit: "contain" }}
      />
    ),
  },
  {
    field: "type",
    headerName: "Type",
    width: 120,
    editable: false,
  },
];

const Categories = () => {
  const { data, error, isLoading } = useCategories();
  // data جاهزة، لا داعي لاستعمال useState unless you want to edit rows!
  // لو بدك تجعل data مصفوفة فاضية في حالة undefined (لمنع مشاكل DataGrid)
  const rows = data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
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
        sx={{ fontSize: 24 }}
      />
    </Box>
  );
};

export default Categories;
