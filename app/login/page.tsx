import React from "react";
import LoginSection from "../../components/login";

type Props = {};

function Login({}: Props) {
  return (
    <div className="flex min-h-screen">
      <LoginSection />
    </div>
  );
}

export default Login;
