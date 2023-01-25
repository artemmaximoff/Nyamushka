import React from "react";
import s from '../mainScreen/mainScreen.module.css'
import back from "../../assets/Pattern.png"
import { CardsMenu } from "../cardsMenu/cardsMenu";

export const MainScreen = () => {

    return (
        <>
            <div className={s.mainScreen}>
                <div className={s.mainScreenHeader}>Ты покормил сегодня кота?</div>
                <div className={s.mainScreenCover}>
                    <img src={back}></img>
                </div>
                <CardsMenu />

            </div>
        </>
    )
}