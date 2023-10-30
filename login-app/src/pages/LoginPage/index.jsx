import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputTextField from "../../components/InputTextField";
import InputPassword from "../../components/InputPassword";
import ContainedButton from "../../components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Campo obrigatório"),
      password: Yup.string()
        .min(8, "A senha precisa ter pelo menos 8 caracteres")
        .required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      // Lógica de envio do formulário de login
      console.log(values);
    },
  });

  return (
    <div id="login" className="">
      <h1 id="title" className="text-center">
        Login
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div id="fields">
          <InputTextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <InputPassword
            id="password"
            name="password"
            label="Senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div id="action">
          <ContainedButton label="Entrar" type="submit" />

          <div className="flex justify-center text-center mt-7">
            <Link to="/cadastro">
              Está sem cadastro? <b className="text-orange-600">Crie Aqui!</b>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
