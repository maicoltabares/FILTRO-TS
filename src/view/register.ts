import { RegisterController } from "../Controller/register";
import { SpinnerController } from "../Controller/spinner";
import { navigateTo } from "../router";


export function RegisterView() {
  const $root = document.getElementById('root') as HTMLElement;

  $root.innerHTML = ``;

  // crear el contenedor del formulario
  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';
  $root.appendChild(formContainer);

  // Crear el formulario de registro
  const form = document.createElement('form');
  form.id = 'registerForm';
  form.className = 'register-form';
  formContainer.appendChild(form);

  // Crear el titulo del formulario
  const title = document.createElement('h2');
  title.textContent = 'Resgistrarse';
  title.className = 'form-title';
  form.appendChild(title);


  // Crear el campo del email
  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  emailLabel.className = 'form-label';
  emailLabel.textContent = 'Correo:';
  form.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.className = 'form-input';
  emailInput.required = true;
  form.appendChild(emailInput);

  // Crear el campo de contraseña
  const passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  passwordLabel.className = 'form-label';
  passwordLabel.textContent = 'Contraseña:';
  form.appendChild(passwordLabel);

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.name = 'password';
  passwordInput.className = 'form-input';
  passwordInput.required = true;
  form.appendChild(passwordInput);

  // Crear el botón de envío
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'form-button button_login';
  submitButton.textContent = 'Aqui te Registras.';
  form.appendChild(submitButton);

  // Crear botón de inicio de sesión
  const loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.className = 'form-button button_login';
  loginButton.textContent = 'Iniciar sesión';
  form.appendChild(loginButton);

  // Logica Register
  loginButton.addEventListener('click', () => {
    navigateTo('/Login');
  });

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const data = {
      email,
      password
    };
    const registerController = new RegisterController();
    const spinnercontroller = new SpinnerController();
    spinnercontroller.createSpinner();
    spinnercontroller.startSpinner();

    try {
      await registerController.postRegister(data);
      navigateTo('/Login');
    } catch (error) {
      console.log(error);
      alert('Error al registrar usuario');
    } finally {
      spinnercontroller.stopSpinner();
    }

  });
}