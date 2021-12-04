import React, { useState } from "react";
import Previewer from "../components/Previewer";
import "../styles/Creator.css";

const Creator = () => {
  const [captions, setCaptions] = useState({ top: "", bottom: "" });
  const [shouldShowDownloadLabel, setShouldShowDownloadLabel] = useState(false);

  let handleCaptionChange = (
    newCaption: React.ChangeEvent<HTMLInputElement>
  ): void =>
    setCaptions({
      ...captions,
      [newCaption.target.name]: newCaption.target.value,
    });

  return (
    <>
      <div className={"container"}>
        <Previewer
          image={{
            src: "https://cleus.co/wp-content/uploads/2019/03/memecoders.jpg",
          }}
          captions={{
            top: captions.top ? captions.top : "Top text preview",
            bottom: captions.bottom ? captions.bottom : "Bottom text preview",
          }}
          style={{ width: "40%" }}
          onMouseEnter={(e) => setShouldShowDownloadLabel(true)}
          onMouseLeave={(e) => setShouldShowDownloadLabel(false)}
          onClick={(e) => console.log("clicked!")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            width: "30%",
          }}
        >
          {shouldShowDownloadLabel ? (
            <h1>Click to download!</h1>
          ) : (
            <>
              <input
                className={"caption-input"}
                type="text"
                placeholder="Top text"
                value={captions.top}
                name={Object.keys(captions)[0]}
                maxLength={100}
                onChange={handleCaptionChange}
              />
              <input
                className={"caption-input"}
                type="text"
                placeholder="Bottom text"
                value={captions.bottom}
                name={Object.keys(captions)[1]}
                maxLength={100}
                onChange={handleCaptionChange}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Creator;
