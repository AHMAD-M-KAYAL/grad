import { SignInFormData } from "../validation/SignInSchema";
import axios from "axios";

export  const mutationSignIn = (manger: SignInFormData) => {
      return axios
        .post<SignInFormData>(
          "https://sahab.ghinashop.net/admin/signin",
          manger
        ).then((res) => res.data);
}