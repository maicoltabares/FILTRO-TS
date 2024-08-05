import { AddPost } from "./View/AddPost/AddPost";
import { Header } from "./View/Header/Header";
import { Home } from "./View/Home/Home";
import { Login } from "./View/Login/Login";
import { SignUp } from "./View/SignUp/SignUp";

export const Router = () => {
  let { hash } = location;

  const divRoot = document.querySelector("#root") as HTMLElement;
  divRoot.innerHTML = ``;

  if (hash === "" || hash === "#/") {
    divRoot.append(Login());
  }
  else if (hash === "#/signUp") {
    divRoot.append(SignUp())
  }
  else if (hash === "#/home") {
    divRoot.append(Header(), Home())
  }
  else if (hash === "#/agregar-post") {
    divRoot.append(Header(), AddPost())
  }
}