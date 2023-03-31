import React from "react";
import MyButton from "../UI/MyButton";
import cl from './FirstPage.module.css'

const FirstPage = () => {
  return (
    <div>
      <div className={cl.wrapper}>
        <img src="src/components/firstPage/humanFirstPage.png" alt="" width='300px'></img>
        <h1>Organize your life with Habito</h1>
        <p>Habito help you build new habits based on behavior science</p>
      </div>
      <MyButton to="/MainPage">Got it!</MyButton>
    </div>
  );
};

export default FirstPage;
