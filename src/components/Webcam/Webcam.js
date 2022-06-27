import React from "react";
import Webcam from "react-webcam";
import "./webcam.css";
import api from "../../apis/api";
import { toast } from "react-toastify";
import {url} from '../../utils/common'

export const WebcamComponent = (props) => {
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
        // top 3 emotions
        const exp  = findMaxThree(res.data.detections.expressions)
        let emotionsToPlay = {
          angry: "Aggressive",
          disgusted: "Energetic",
          fearful: "Relaxing",
          happy: "Happy",
          neutral: "Relaxing",
          sad: "Dark",
          surprised: "Energetic"
        }
        let url = '/music/mood/'+emotionsToPlay[Object.keys(exp)[0]] 
        api.get(url).then(res=>{
          let playlist = res.data.songs
          playlist.forEach(song => {
            song.src = url+"/music/play/" + song.id;
          });
          props.setPlaylist(playlist)
        }).catch(err=>{
          console.log(err)
        })
        toast(`Modifying playlist: ${Object.keys(exp)[0]}`, {
          position:"bottom-right",
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
