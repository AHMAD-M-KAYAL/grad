import { Box } from "@mui/material";
import useGetData from "../../hooks/useGetData";
import {
  Service,
  useServices,
} from "../..//hooks/servicesComponent/useServices";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid";
const Services = () => {
  const columns: GridColDef<Service>[] = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      width: 250,
    },
    {
      field: "rating",
      headerName: "rating",
      width: 120,
      editable: false,
    },
    {
      field: "duration",
      headerName: "duration",

      renderCell: (params) => (
        <img
          src={
            "https://tse1.mm.bing.net/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          // alt={params.row.title}
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
      ),
    },
  ];
  const { data, isLoading, error } = useServices();
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

export default Services;

//  renderCell: (params) => (
//       <img
//         src={params.value}
//         // alt={params.row.title}
//         style={{ width: 40, height: 40, objectFit: "contain" }}
//       />
//     ),
