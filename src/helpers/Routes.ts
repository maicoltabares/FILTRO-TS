import { HomeView } from "../view/home";
import { LoginView } from "../view/login";
import { RegisterView } from "../view/register";

export const Routes = {
  public: [
    { path: "/Login", component: LoginView },
    { path: "/Register", component: RegisterView },
  ],
  private: [
    { path: "/home", component: HomeView },
  ]
};