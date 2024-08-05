import { navigateTo } from "../router";
import "./header.css";

export function HeaderHome() {

    const html = `
        <header class="header">
            <h1 class="header-title">Post</h1>
            <div class="header-buttons">
                <button id="create-post" class="btn_header">Crear un post</button>
                <button id="logout" class="btn_header">Salir</button>
            </div>
        </header>
    `;

    const logic = () => {
        const button_logout = document.getElementById('logout') as HTMLButtonElement;
        button_logout.addEventListener('click', () => {
            sessionStorage.removeItem('email');
            navigateTo('/Login');
        })
    }

    return { html, logic };
}