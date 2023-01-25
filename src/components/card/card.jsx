import React from "react";
import s from "../card/card.module.css"
import { useState } from "react";
import { CardItem1 } from "../cardItem1/cardItem1";
import { CardItemDisabled } from "../cardItemDisabled/cardItemDisabled";

export const Card = ({ card }) => {

    const [selected, setSelected] = useState(false)
    const [mouseleft, setMouseleft] = useState(false)



    const selectCard = () => {
        setSelected(!selected)
    }

    const hoverOnLeave = () => {
        if (selected) {
            setMouseleft(true)
        } else {
            return
        }
    }

    const hoverOnOver = () => {
        if (selected) {
            setMouseleft(false)
        } else {
            return
        }
    }


    return (
        <>
            <div className={s.card}>
                {card.disabled
                    ? <CardItemDisabled card={card} />
                    : <CardItem1
                        card={card}
                        selected={selected}
                        selectCard={selectCard}
                        mouseleft={mouseleft}
                        hoverOnLeave={hoverOnLeave}
                        hoverOnOver={hoverOnOver}
                    />}
                {card.disabled
                    ? <p className={s.bottomDisabled}>{card.bottom?.disabled}</p>
                    : <p className={s.bottomEnabled}>{selected ? card.bottom?.selected : card.bottom?.default}
                        {selected || <span className={s.buy} onClick={selectCard}>купи</span>}
                    </p>}
            </div>
        </>
    )
}