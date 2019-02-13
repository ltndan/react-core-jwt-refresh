import React from "react";
import { render } from "react-dom";
import { CreateUser } from "./Components/CreateUser";
import { SignInUser } from "./Components/SigninUser";
import { CallApi } from "./Components/CallApi";
import { UserInfo } from "./Components/UserInfo";
import { withLogin } from "./Contexts/login/loginWrapper";

const App = () => (
  <React.Fragment>
    <div style={{ wordBreak: "break-all" }}>
      <CreateUser />
      <div>
        <SignInUser />
      </div>
      <div>
        <CallApi />
      </div>
    </div>
    <UserInfo />
  </React.Fragment>
);

render(withLogin(<App />), document.getElementById("root"));
