import React from "react";
import MainInput from '../../components/ui/MainInput/MainInput';

const LoginPage = () => {
  return (
    <section>
      <div className="container">
        <form>
          <MainInput type="email" />
          <MainInput type="password" />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;