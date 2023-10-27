import React from "react";
import InputTextField from "../../components/InputTextField";
import InputPassword from "../../components/InputPassword";
import ContainedButton from "../../components/Button";

const LoginPage = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div id="login" className="">
      <h1 id="title" className="text-center">
        LogIn do Sistema
      </h1>
      <form id="form" action="" onSubmit={HandleSubmit}>
        <div id="fields">
          <InputTextField Label="E-mail" Type="email" />
          <InputPassword Label="Senha" />
        </div>
        <div id="action">
          <ContainedButton Label="Entrar" Type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
