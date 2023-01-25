import React from "react";
import { useCards } from "../../useCards";
import { Card } from "../card/card";
import s from "../cardsMenu/cardsMenu.module.css"

export const CardsMenu = () => {
    const { cards } = useCards()

    return (
        <>
            <div className={s.cardsMenu}>
                {cards.map(card => <Card card={card} key={card.id} />)}
            </div>
        </>
    )
}