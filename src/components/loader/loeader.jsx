
import Loader from "react-loader-spinner";

function loader(){

    return (
      <Loader
        type="Bars"
        color="#00BFFF"
        height={300}
        width={300}
        timeout={5000} //3 secs
      />
    );
  
}

export default loader;