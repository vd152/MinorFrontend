import React from "react";
import Webcam from "react-webcam";
import "./webcam.css";
import api from "../../apis/api";
import { toast } from "react-toastify";
export const WebcamComponent = () => {
  const webcamRef = React.useRef(null);

  const findMaxThree = (expressions) => {
    
    const result = Object.assign(                      // collect all objects into a single obj
      ...Object                                // spread the final array as parameters
          .entries(expressions)                     // key a list of key/ value pairs
          .sort(({ 1: a }, { 1: b }) => b - a) // sort DESC by index 1
          .slice(0, 3)                         // get first three items of array
          .map(([k, v]) => ({ [k]: v }))       // map an object with a destructured
  );  
  return result;

  }
  const capture = React.useCallback(() => {
    const base64Str = webcamRef.current?.getScreenshot();
    api
      .post("/emotion", { image: base64Str })
      .then((res) => {
        // console.log(res.data.detections);
        const exp  = findMaxThree(res.data.detections.expressions)
        toast(Object.keys(exp)[0], {
          position:"top-center",
          theme: "light"
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, [webcamRef]);

  return (
    <div className="webcam-container">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button
        style={{ visibility: "hidden" }}
        id="capture-img"
        onClick={(e) => {
          e.preventDefault();
          capture();
        }}
      >
        Capture
      </button>
    </div>
  );
};
