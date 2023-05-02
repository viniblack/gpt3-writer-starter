import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { useState } from "react";

const Home = () => {
  const [userInput, setUserInput] = useState("");

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | WEB3DEV</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Converse com o  Goku, do Dragon Ball</h1>
          </div>
          <div className="header-subtitle">
            <h2>Escreva uma mensagem para o Goku e pergunte a ele sobre qualquer coisa.</h2>
          </div>
        </div>
        {/* Adicione esse código aqui */}
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="digite aqui..."
            value={userInput}
            onChange={onUserChangedText}
          />
          {/* Novo código que adicionei aqui */}
          <div className="prompt-buttons">
            <a className="generate-button" onClick={null}>
              <div className="generate">
                <p>Gerar</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
