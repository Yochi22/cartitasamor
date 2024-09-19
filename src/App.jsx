import React, { useState } from "react";
import Modal from "./Modal";
import SobresView from "./SobresView";
import "../styles/App.css";
import videosobre from "./assets/video-sobre.mp4";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentView, setCurrentView] = useState("carta");

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="app-container">
      {currentView === "carta" && (
        <>
          <h1>Ábrelas cuando...</h1>
          <h2>Hola amor. Te dejé una cartita, por favor léela.</h2>

          <div className="video-container">
            <video autoPlay loop muted className="video">
              <source src={videosobre} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <button onClick={toggleModal}>Abrir carta</button>
          {showModal && (
            <Modal onClose={toggleModal}>
              <p>
                Amorcito, una vez me preguntaste por qué no te hago cartas y mi
                respuesta fue: porque yo no sé escribir. Y es verdad, no deja de
                ser cierto que siento que no soy capaz de expresarme a través de
                palabras. Sin embargo, esto no debería ser un impedimento para
                hacerte saber lo que siento. Te dejo muchas cartitas que puedes
                ir abriendo cuando las necesites.
              </p>
              <p>Nota: Tienes que pedirme las
              contraseñas porque no quiero que abras todas el mismo día.</p>
              <button onClick={() => setCurrentView("sobres")}>
                Elegir una cartita
              </button>
            </Modal>
          )}
        </>
      )}

      {currentView === "sobres" && (
        <SobresView goBack={() => setCurrentView("carta")} />
      )}
    </div>
  );
}

export default App;
