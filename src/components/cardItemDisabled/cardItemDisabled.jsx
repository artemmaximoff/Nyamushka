import React from "react";
import s from '../cardItemDisabled/cardItemDisabled.module.css'

export const CardItemDisabled = ({ card }) => {

    const desc = card.description.split(' ')

    return (
        <>
            <div className={s.cardItemDisabledWrapper}>
                <div className={s.cardItemDisabled}>
                    <div className={s.backgrounDisabled}></div>
                    <div className={s.cardItemText}>
                        <div className={s.cardItemHeader}>{card.header?.default}</div>
                        <div className={s.cardItemTitle}>{card.title}</div>
                        <div className={s.cardItemSubtitle} >{card.subtitle}</div>
                        <div className={s.cardItemDescription}>
                            <div><span className={s.portion} >{desc[0]}</span> {desc[1]}</div>
                            <div><span className={s.portion}>{desc[2]}</span> {desc[3]} {desc[4]} {desc[5]}</div>
                            <div>{desc[6]} {desc[7]}</div>
                        </div>
                    </div>

                    <div className={s.cat}>
                        <div className={s.ball}>
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