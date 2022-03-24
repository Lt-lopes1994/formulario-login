import "./style.css";
import Backgroundimage from "../../assets/background.jpg";
import { useState } from "react";
import SucessPic from "../../assets/woman-success.png";
import Message from "../../components/Message";
import InputPassword from "../../components/InputPassword";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChangeForm(e) {
    setError("");

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleClear() {
    setError("");
    setForm({ name: "", email: "", password: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Complete todos os campos!");

      return;
    }

    setSuccess(true);
  }

  return (
    <div className="container">
      <div className="left">
        {!success ? (
          <div className="containerForm">
            <h1>Cadastre-se</h1>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="name"
                value={form.name}
                onChange={(e) => handleChangeForm(e)}
              />

              <input
                name="email"
                type="text"
                placeholder="email"
                value={form.email}
                onChange={(e) => handleChangeForm(e)}
              />

              <InputPassword
                state={form.password}
                handleChange={handleChangeForm}
              />

              {error && <span className="errorMessage">{error}</span>}

              <div className="containerBtn">
                <button className="btn btnBlue" type="submit">
                  Cadastrar
                </button>
                <button
                  onClick={() => handleClear()}
                  className="btn btnRed"
                  type="button"
                >
                  Cancelar
                </button>
              </div>
            </form>

            <div className="containerLink">
              <span>Já tem cadastro?</span>
              <a href="http://google.com.br">Clique aqui</a>
            </div>
          </div>
        ) : (
          <Message
            message="Cadastrado realizado com sucesso!"
            image={SucessPic}
          />
        )}
      </div>
      <img className="right" src={Backgroundimage} alt="background" />
    </div>
  );
}

export default SignUp;
