import { useState } from "react";
import "./PlayButton.scss";
function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ButtonHandler = () => {};
  if (!isPlaying) {
    return (
      <div className="circle container">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="circle__btn  items-center justify-center pl-[0.2rem]"
        >
          <ion-icon className="play" name="play"></ion-icon>
        </button>
        <span className="circle__back-1paused"></span>
        <span className="circle__back-2paused"></span>
      </div>
    );
  }
  return (
    <div className="circle container ">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="circle__btn items-center justify-center"
      >
        <ion-icon className="pause" name="pause"></ion-icon>
      </button>
      <span className="circle__back-1"></span>
      <span className="circle__back-2"></span>
    </div>
  );
}
// <button className="btn-xs btn sm:btn-sm md:btn-md lg:btn-lg">Play</button>

export default PlayButton;
