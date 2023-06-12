import React from "react";
import SignUpSection from "../../components/signup";

type Props = {};

function SignUp({}: Props) {
  return (
    <div className="flex min-h-screen">
      <SignUpSection />
    </div>
  );
}

export default SignUp;
