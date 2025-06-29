import { Box, Button, TextField, Typography } from "@mui/material";
import Logo from "./assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInFormData, signInSchema } from "./validation/SignInSchema";
import { mutationSignIn } from "./api/auth";
import { useMutation } from "@tanstack/react-query";
const SignIn = () => {
  //useForm
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema) });
  //submit function
  const onSubmit = (data: SignInFormData) => {
    mutation.mutate(data);
  };
  //return component

  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: mutationSignIn,
    onSuccess: (data) => {
      console.log("login successful", data);
      // localStorage.setItem("accessToken",mutation.)
    },
    onError: (error) => {
      console.error("error to log in", error);
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        height: "90vh",
        justifyContent: { xs: "space-evenly", md: "space-between" },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img src={Logo} width={260} height={260} />
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", color: "#053ab8a3" }}
        >
          Sign in
        </Typography>
        <Box sx={{ fontSize: "18px", color: "rgb(0 0 0 / 44%)" }}>
          Sign In To Dashboard
        </Box>
      </Box>
      {/* start of Form  */}
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          helperText={errors.email?.message}
          error={!!errors.email}
          {...register("email")}
          id="email"
          label="Email"
          type="text"
          autoComplete="current-password"
          sx={{ width: { xs: "200px", md: "300px", lg: "400px" } }}
        />
        <TextField
          helperText={errors.password?.message}
          error={!!errors.password}
          {...register("password")}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{
            width: { xs: "200px", md: "300px", lg: "400px" },
            marginTop: "30px",
          }}
        />
        <Button
          type="submit"
          sx={{
            width: { xs: "200px", md: "300px", lg: "400px" },
            marginTop: "30px",
            fontSize: "20px",
          }}
          variant="contained"
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
