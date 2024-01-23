import Logo from "../images/Registration_App_Logo.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#474787"),
  backgroundColor: "#474787",
  "&:hover": {
    backgroundColor: "#989898",
  },
}));

function Login() {
  return (
    <div
      id="LoginPage"
      className="w-full h-full relative flex justify-center items-center "
    >
      <header id="LoginHeader">
        <img src={Logo} alt="logo" />
      </header>
      <div id="LoginInfo">
        <h1>Welcome</h1>
        <form class="LoginForm">
          <input placeholder="Email Address"></input>
          <input placeholder="Password"></input>
          <ColorButton className="w-1/2" type="submit">
            LogIn
          </ColorButton>
        </form>
        <div class="OrLine">
          <hr />
          OR
          <hr />
        </div>
        <div class="signUp">
          <p>Don't have an accont?</p>
          <ColorButton className="w-5/6">Sign Up</ColorButton>
        </div>
      </div>
      <footer id="loginFooter">
        <p>Help</p>
        <p>@2023 - MtecPro</p>
        <p>About</p>
      </footer>
    </div>
  );
}

export default Login;