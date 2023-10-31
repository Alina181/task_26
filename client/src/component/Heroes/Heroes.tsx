import React, { useState } from "react";
import { EPAGES } from "../../App"; 
import "./Heroes.css";

interface IHeroesProps {
  epages: Function;

}
const Heroes: React.FC<IHeroesProps> = ({ epages }) => {
  const images = ["image-Sportik", "image-humanitarian", "image-techguy"];
  const [imageIndex, setImageIndex] = useState(0);
  const [text, setText] = useState("text-Sportik");
  const [button, setButton] = useState("button-S");

  const [showArrow3, setShowArrow3] = useState(false);
  const [showArrow2, setShowArrow2] = useState(true);

  const handleArrow2Click = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (images[imageIndex] === "image-Sportik") {
      setText("text-humanitarian");
      setButton("button-H");
      setShowArrow3(true);
    } else if (images[imageIndex] === "image-humanitarian") {
      setText("text-techguy");
      setButton("button-T");
      setShowArrow2(false);
    } else if (images[imageIndex] === "image-techguy") {
      setText("text-humanitarian");
      setButton("button-H");
      setShowArrow2(true);
    }
  };

  const handleArrow3Click = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (images[imageIndex] === "image-techguy") {
      setText("text-humanitarian");
      setButton("button-H");
      setShowArrow2(true);
    } else if (images[imageIndex] === "image-humanitarian") {
      setText("text-Sportik");
      setButton("button-S");
      setShowArrow3(false);
    } else if (images[imageIndex] === "image-Sportik") {
      setText("text-techguy");
      setButton("button-T");
      setShowArrow3(true);
    }
  };

  const currentImage = images[imageIndex];

  return (
    <div className="container-Heroes">
      <button onClick={() => epages(EPAGES.MENU)} className="arrow-1"></button>
      <div className="image-PowerEngineer">
        
        {showArrow2 && (
          <div className="arrow-2" onClick={handleArrow2Click}></div>
        )}
        
        {showArrow3 && (
          <div className="arrow-3" onClick={handleArrow3Click}></div>
        )}
        {button === "button-S" && (
          <button className="button-S">
            <span className="bracket">&lt;</span>Спортник
            <span className="bracket">&gt;</span>
          </button>
        )}
        {button === "button-H" && (
          <button className="button-H">
            <span className="bracket">&lt;</span>Гуманитарий
            <span className="bracket">&gt;</span>
          </button>
        )}
        {button === "button-T" && (
          <button className="button-T">
            <span className="bracket">&lt;</span>Технарь
            <span className="bracket">&gt;</span>
          </button>
        )}
        <div className={currentImage}></div>
      </div>
      <div className="panel">
        {text === "text-Sportik" && (
          <div className="text-Sportik">
            “Спортник” - имеет повышенное здоровье в 150 единиц, увеличенный вдвое
            урон по паре “Физра” и любое улучшение от предметов увеличивается в
            1.25 раза.
          </div>
        )}
        {text === "text-humanitarian" && (
          <div className="text-humanitarian">
            “Гуманитарий” - имеет обычное здоровье в 100 единиц, увеличенный вдвое
            урон по парам “Русский язык”, “Английский язык”. Предметы типа “Книга”
            улучшают характеристики в 1.5 раза сильнее.
          </div>
        )}
        {text === "text-techguy" && (
          <div className="text-techguy">
            “Технарь”- имеет обычное здоровье в 100 единиц, увеличенный вдвое урон по парам “Математика” и “Программирование”. Предметы типа “Гаджет” улучшают характеристики в 1.5 раза сильнее.
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Heroes;