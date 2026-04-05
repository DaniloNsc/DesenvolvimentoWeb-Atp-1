import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleAcessar() {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <div>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "6px" }}>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "8px" }}>
        <button onClick={handleAcessar}>Acessar</button>
      </div>

      <label style={{ marginTop: "12px", display: "block" }}>
        {mensagem}
      </label>
    </div>
  );
}

export default App;
