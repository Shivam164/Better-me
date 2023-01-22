import React, { useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "../styles/VoiceInput.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const appId = process.env.REACT_APP_APPID;
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const VoiceInput = () => {

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  const history = useNavigate();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleClick = () => {
    if(!transcript)return;
    setTimeout(getData, 3000);
  }

  const getData = async () => {
    const options = {
      method: 'POST',
      url: 'https://api.cohere.ai/classify',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer ZOXPSrv0PTu70U5ooxEVTQQh3ZTojoaDLZU44Dd9'
      },
      data: {
        inputs: [transcript],
        examples: [
          {text: "Homepage", label: "Homepage"},
          {text: "Take me to home page", label: "Homepage"},
          {text: "Show me everything at one place", label: "Homepage"},
          {text: "Show main page", label: "Homepage"},
          {text: "I want to get physically fit", label: "Exercisepage"},
          {text: "Show some exercises", label: "Exercisepage"},
          {text: "How can I get physically fit", label: "Exercisepage"},
          {text: "Show some food", label: "Foodpage"},
          {text: "Healthy food", label: "Foodpage"},
          {text: "What can I eat", label: "Foodpage"},
          {text: "Sleep tips", label: "Sleeppage"},
          {text: "Feeling tired", label: "Sleeppage"}
        ],
        truncate: 'END'
      }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.classifications[0].prediction);
    const pageToGo = response.data.classifications[0].prediction;
    if(pageToGo === "Homepage"){
      history("/");
    }else if(pageToGo === "Exercisepage"){
      history("/exercise");
    }else if(pageToGo === "Foodpage"){
      history("/food");
    }else{
       // sleeppage
      history("/sleep");
    }
  })
  .catch(function (error) {
    console.error(error);
  });
  }

  return (
    <div className='voiceInput'>
      <p className='mic__state'>Move around </p>
      <p className='text__generated'>{transcript}</p>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
        onClick={handleClick}
        className="hold__button"
      >Hold to talk | {listening ? 'ON' : 'OFF'}</button>
    </div>
  );
};
export default VoiceInput;