import "./404Error.scss";
// import Popup from "../components/popup";

const Error = () => {
  return (
    <div id="error">
      <div id="imgs">
        {/* <Popup message="hey" show={true} title="how are you" /> */}
        <img
          id="Error"
          src="https://media.tenor.com/images/9b6676bde88262d50a7b2b2620bf8768/tenor.gif"
          alt="error"
        ></img>
        <img
          id="E404"
          src="https://l.top4top.io/p_20311uhk21.png"
          alt="error"
        ></img>
      </div>
    </div>
  );
};

export default Error;
