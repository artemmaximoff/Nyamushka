import React from "react";
import s from '../cardItem1/cardItem1.module.css'

export const CardItem1 = ({ card, selected, selectCard, mouseleft, hoverOnLeave, hoverOnOver }) => {

    const desc = card.description.split(' ')

    return (
        <>
            <div className={selected ? s.cardWrapperSelected : s.cardWrapper}>
                <div className={selected ? s.cardItem1Selected : s.cardItem1}
                    onClick={selectCard}
                    onMouseLeave={hoverOnLeave}
                    onMouseOver={hoverOnOver}
                >

                    <div className={s.cardItemText}>
                        <div className={s.cardItemHeader}>{mouseleft ? card.header?.selectedHover : card.header?.default}</div>
                        <div className={s.cardItemTitle}>{card.title}</div>
                        <div className={s.cardItemSubtitle} >{card.subtitle}</div>
                        <div className={s.cardItemDescription}>
                            <div><span className={s.portion} >{desc[0]}</span> {desc[1]}</div>
                            <div><span className={s.portion}>{desc[2]}</span> {desc[3]} {desc[4]} {desc[5]}</div>
                            <div>{desc[6]} {desc[7]}</div>
                        </div>

                    </div>

                    <div className={s.cat}>
                        <div className={selected ? s.ballSelected : s.ball}>
                            <div className={s.ballInside}>
                                <div>{card.weight}</div>
                                <div className={s.ballInsideKg} >кг</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}