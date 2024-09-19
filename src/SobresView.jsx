import React, { useState } from "react";
import Modal from "./Modal";
import Sobre from "./assets/mail.png";

const sobres = [
  {
    id: 1,
    title: "Ábrela",
    subtitle: "Cuando estés enojada",
    content: (
      <p>
        Sé que en este momento puedes sentirte abrumada, y el enojo que sientes
        es totalmente válido. Quiero que sepas que estoy aquí para ti,
        simplemente para escucharte y que te desahogues. A veces es muy difícil
        ver más allá de la rabia y el enojo, pero estoy aquí para acompañarte si
        lo necesitas.
        <br />
        Si yo soy la causa de tu enojo, te pido disculpas. No es un buen
        reconocimiento, pero creo que puedo decir que soy la persona que más te
        hace enojar en el mundo. Perdóname. Probablemente yo también esté
        pasando por una situación desagradable que me hizo reaccionar no de la
        mejor manera, pero vamos a hablar. No te alejes, no te guardes el enojo.
        <br />
        Desde el amor y el entendimiento mutuo, estoy segura de que podemos
        solucionar nuestras diferencias. Te amo!
      </p>
    ),
    password: "noterindasenmi",
  },
  {
    id: 2,
    title: "Ábrela",
    subtitle: "Cuando te sientas triste",
    content: (
      <p>
        Hola, amor: <br /> Sinceramente, espero que no estés aquí por mí. No
        puedo prometerte una vida sin tristezas a mi lado, pero sí voy a
        intentar que sean menos, porque todo lo que quiero es que tengas una
        vida tranquila, plena y feliz. En este momento, puede parecer que el
        mundo pesa demasiado, pero quiero recordarte que siempre estoy aquí y
        que, entre dos, todo puede ser más llevadero. Estoy completamente segura
        de que llegará el momento en que volverás a brillar con fuerza. <br />
        Te amo más allá de las palabras, más allá de cualquier tristeza o
        conflicto. Aquí me tienes, amor, con los brazos abiertos para abrazar lo
        que sientes y ser ese lugar seguro que necesitas. <br />
        Te diría que bailes zumba para que te sientas un poquito menos triste,
        jaja, pero creo que no va a funcionar.
      </p>
    ),
    password: "nollora",
  },
  {
    id: 3,
    title: "Ábrela",
    subtitle: "Cuando te sientas insegura",
    content: (
      <p>
        Hola, amor <br />
        Sé que a veces los pensamientos de inseguridad y celos pueden aparecer
        porque yo misma los tengo en muchas ocasiones, pero quiero que en esos
        momentos recuerdes algo muy importante: eres mi vida entera. <br />
        Por favor, piensa en los días que estuvimos juntas. ¿Puedes recordar
        cómo te miraba? Yo misma podía sentir que mi mirada era diferente, llena
        de amor absoluto y fascinación. Quédate con eso, porque no creo que sea
        capaz de mirar a otra persona con los ojos que te miro a ti. <br />
        Tú más que nadie sabe lo que he pasado, porque me he abierto totalmente
        contigo. Te he compartido mis miedos, mis inseguridades y todas esas
        cosas que tuve que pasar para llegar a este momento.. Lo que tenemos
        supera todo lo que alguna vez soñé, y créeme que yo no sueño chiquito.{" "}
        <br /> Yo sé lo que es bueno para mí y sé lo que quiero para mi vida.
        Eso eres tú, y nadie más. No dejes que las dudas nublen tu mente.
      </p>
    ),
    password: "maderafina",
  },
  {
    id: 4,
    title: "Ábrela",
    subtitle: "Cuando me extrañes",
    content: (
      <p>
        Hola, amor <br /> Si estás acá es porque en este momento me extrañas, y
        créeme, yo también te extraño todos los días (no importa cuando leas
        esto). Desde que te conocí y sentí tu presencia, no ha habido un solo
        día en que no anhele volver a tenerla. Y no sé si me creas pero todas
        las noches antes de dormir sueño un poquito contigo, sueño despierta.
        <br />
        Quiero que pienses en algo: todo esto va a pasar. Al final, vamos a
        estar en nuestra casita, ya sea allá, aquí, en Portugal, o donde
        decidamos construir nuestro hogar y este momento, que ahora parece
        interminable, va a ser solo un recuerdo lejano. <br /> Tengo que
        confesarte que, a veces, me da miedo que pase el tiempo y olvide cómo se
        siente abrazarte, besarte o simplemente mirarte a los ojos mientras
        hablamos. Pero a la vez, trato de reconfortarme pensando que ese día
        llegará y todo valdrá la pena. <br /> Por cierto, ¿qué es lo que más
        extrañas de mí?
      </p>
    ),
    password: "brazosdesol",
  },
  {
    id: 5,
    title: "Ábrela",
    subtitle: "Cuando tengas un mal día",
    content: (
      <p>
        Hola, amorcito mío <br /> Sé que hoy ha sido un mal día y está bien que
        lo sientas así. No siempre tenemos que estar bien, y no siempre todo va
        a ser perfecto. A veces la vida simplemente pesa. Pero quiero que sepas
        que está bien sentirte mal y que no tienes que cargar con todo sola.{" "}
        <br /> No estoy aquí para decirte que todo se arreglará de inmediato
        porque ese optimismo tóxico no me gusta, pero sí para recordarte que no
        tienes que ser fuerte todo el tiempo. Si necesitas un momento para
        desahogarte, para no hacer nada o simplemente estar en silencio, está
        bien. Estoy contigo, aunque no pueda estar físicamente a tu lado. Cuando
        quieras hablar, llorar o simplemente estar, yo estaré aquí para lo que
        necesites. <br /> No puedo prometer que las cosas mejorarán al instante,
        pero sí que no tienes que enfrentarlas sola. Al final del día, lo
        importante es que nos tenemos y eso me hace sentir que aunque no las
        cosas no estén totalmente bien, juntas es más sencillo.
      </p>
    ),
    password: "liberation",
  },
  {
    id: 6,
    title: "Ábrela",
    subtitle: "Cuando sientas que no puedes más",
    content: (
      <p>
        Honestamente, espero que este sobre no sea abierto, porque no quiero
        pensar que las cosas se están poniendo tan feas que se vuelven casi
        inaguantables. Sin embargo, si hoy estás aquí, quiero decirte algo: <br />
        Simplemente quiero hacerte saber lo que significas para mí, o al menos
        intentarlo, porque es algo que va más allá de las palabras. Tú has
        traído paz a mi vida de una manera que no creía posible. No solo me
        haces sentir acompañada, sino que también me invitas a ser mejor por mí,
        por ti, por nosotras, a abrirme de formas que nunca pensé. Me doy cuenta
        de que cada palabra, cada gesto, cada momento compartido ha construido
        algo mucho más grande de lo que podemos ver en el día a día. Un año
        (hasta el momento en que escribo esto) puede parecer poco tiempo, pero
        para mí ha sido una eternidad contigo; es como si antes de ti no hubiese
        nada más. Es un tiempo que me ha cambiado para siempre, una eternidad en
        la que quiero quedarme. <br /> Te confieso que también tengo miedos. Miedo de
        que el tiempo pase, de que la distancia nos pese más de lo que
        quisiéramos. Pero luego recuerdo quiénes somos, lo que hemos construido,
        y sé que somos más fuertes que cualquier adversidad porque nos amamos.
        Porque eres lo que más amo en la vida entera. <br /> No sé si lo recuerdas,
        pero en uno de los sobres te conté que todas las noches antes de dormir,
        sueño despierta contigo. Me veo ahí, contigo, compartiendo en la sala de
        una casa que se siente como nuestro pequeño universo. Me imagino riendo,
        discutiendo, reconciliándonos, siendo las imperfectas que somos, pero
        amándonos más allá de cualquier problema o día gris. <br /> Sigamos caminando
        juntas, amor. <br /> El amor siempre va a ser la respuesta y siempre va a ser
        suficiente.
      </p>
    ),
    password: "babyiloveyou",
  },
  {
    id: 7,
    title: "Ábrela",
    subtitle: "Cuando te sientas sola",
    content: (
      <p>
        Hola, mi amor <br /> Si estás acá es porque hoy te sientes sola. Estás
        lejos de tu familia, de mí y de la gente que amas. Yo sé lo difícil que
        es y no intento suavizarlo. No creo que haya palabras mágicas que puedan
        quitar esa sensación de vacío, y está bien sentirte así de vez en
        cuando. A veces, simplemente no podemos escapar de esos momentos. De
        verdad desearía estar ahí contigo, abrazarte y hacerte sentir
        acompañada, pero por ahora únicamente puedo ofrecerte mi compañía en la
        distancia. <br /> Cuando me dices que te sientes sola, empiezo a
        cuestionarme cosas que tal vez no debería. Sé que ese vacío va más allá
        de lo que una pareja puede llenar, pero me lleno de inseguridad y me
        pregunto si realmente soy lo que necesitas. Sé (porque lo hemos hablado
        antes) que tu soledad no tiene su origen en nuestra relación, pero me
        cuesta no pensar que podría hacer más para hacerte sentir mejor, me
        frustra mucho. Aunque no puedo borrar esa soledad, quiero que sientas
        que puedes contar conmigo para lo que sea. No siempre sabré qué decir,
        pero siempre voy a querer escucharte.
      </p>
    ),
    password: "territory",
  },
  {
    id: 8,
    title: "Ábrela",
    subtitle: "Cuando te sientas feliz",
    content: (
      <p>
        Si estás abriendo esto, quiere decir que te sientes feliz, y eso me hace
        feliz a mí también, porque sé que actualmente son más los días en los
        que esto no es así. Hay un recuerdo al que siempre voy cuando quiero
        encontrar una sonrisa: siempre vuelvo a la primera conversación que
        tuvimos por llamada, casi por obligación para ti, y recuerdo el momento
        en que me pediste permiso para "caerme". Puedo volver mil veces a ese
        momento y mil veces sonrío igual. Ese día, tú te sentías feliz, te
        escuchabas de muy buen humor. Sé que no son los mejores días, pero
        confío en que volveremos a estar ahí, donde tu risa es lo único que
        llena mi espacio, porque cada vez que te escucho reír, me llenas de
        vida.
      </p>
    ),
    password: "lovesong",
  },
];

function SobresView({ goBack }) {
  const [selectedSobre, setSelectedSobre] = useState(null);
  const [inputPassword, setInputPassword] = useState("");
  const [currentSobre, setCurrentSobre] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const selectSobre = (sobre) => {
    setSelectedSobre(sobre);
    setInputPassword("");
    setErrorMessage("");
  };

  const openSobre = () => {
    if (inputPassword === selectedSobre.password) {
      setCurrentSobre(selectedSobre);
      setErrorMessage("");
    } else {
      setErrorMessage("Sigue intentando, amorcito");
    }
  };

  const closeModal = () => {
    setCurrentSobre(null);
    setSelectedSobre(null);
    setInputPassword("");
  };

  return (
    <div className="sobres-view-container">
      <h2>¿Cuál necesitas leer hoy?</h2>
      <div className="sobres-container">
        {sobres.map((sobre) => (
          <div key={sobre.id} className="sobre-item">
            <p>{sobre.title}</p>
            <p className="subtitle-sobre">{sobre.subtitle}</p>
            <button onClick={() => selectSobre(sobre)} className="sobre-button">
              <img src={Sobre} alt="Sobre" className="sobre-image" />
            </button>
          </div>
        ))}
      </div>

      {selectedSobre && (
        <div className="password-container">
          <label htmlFor="password">
            ¿Cuál es la contraseña para el sobre "{selectedSobre.subtitle}"?
          </label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="password-input"
          />
          <button onClick={openSobre} className="open-button">
            Abrir
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}

      {currentSobre && (
        <Modal onClose={closeModal}>
          <p>{currentSobre.content}</p>
        </Modal>
      )}

      <button onClick={goBack}>Regresar</button>
    </div>
  );
}

export default SobresView;
