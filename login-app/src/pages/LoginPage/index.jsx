import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputTextField from "../../components/InputTextField";
import InputPassword from "../../components/InputPassword";
import ContainedButton from "../../components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: Yup.string()
      .min(8, "A senha precisa ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const handleSubmit = (values) => {
    // Faça a lógica de autenticação aqui, por exemplo, enviar os dados para um servidor
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div id="login" className="">
      <h1 id="title" className="text-center">
        Login
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div id="fields">
          <InputTextField
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <InputPassword
            label="Senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div id="action">
          <ContainedButton label="Entrar" type="submit" />

          <h3>
            <Link to="/cadastro">Ir para a página de cadastro</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
