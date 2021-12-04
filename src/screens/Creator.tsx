import React from "react";
import Previewer from "../components/Previewer";

const Creator = () => {
  return (
    <>
      <Previewer
        image={{
          src: "https://cleus.co/wp-content/uploads/2019/03/memecoders.jpg",
        }}
        captions={{ top: "Top text", bottom: "Bottom Text" }}
      />
    </>
  );
};

export default Creator;
