import Alert from "@mui/material/Alert";
import { CheckIcon } from "lucide-react";

export default function Success() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Category Added!
    </Alert>
  );
}
