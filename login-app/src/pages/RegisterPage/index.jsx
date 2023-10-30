import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputTextField from "../../components/InputTextField";
import InputPassword from "../../components/InputPassword";
import ContainedButton from "../../components/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Campo obrigatório"),
      password: Yup.string()
        .min(8, "A senha precisa ter pelo menos 8 caracteres")
        .required("Campo obrigatório"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "As senhas não coincidem")
        .required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      // Lógica de envio do formulário de cadastro
      console.log(values);
    },
  });

  return (
    <div id="cadastro" className="">
      <h1 id="title" className="text-center">
        Cadastro
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

          <InputPassword
            id="confirmPassword"
            name="confirmPassword"
            label="Repita a Senha"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>
        <div id="action">
          <ContainedButton label="Cadastrar" type="submit" />

          <div className="flex justify-center text-center mt-7">
            <Link to="/login">
              Já tem login? <b className="text-orange-600">Acesse por aqui</b>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
