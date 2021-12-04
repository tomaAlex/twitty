import React from "react";
import Previewer from "../components/Previewer";
import '../styles/Creator.css';

const Creator = () => {
  return (
    <>
      <div className={'container'}>
        <Previewer
          image={{
            src: "https://cleus.co/wp-content/uploads/2019/03/memecoders.jpg",
          }}
          captions={{ top: "Top text", bottom: "Bottom Text" }}
        />
        <Previewer
          image={{
            src: "https://cleus.co/wp-content/uploads/2019/03/memecoders.jpg",
          }}
          captions={{ top: "Top text", bottom: "Bottom Text" }}
        /> 
      </div>
    </>
  );
};

export default Creator;
