import React, { useEffect } from "react";
import { useState } from "react";


export const useCards = () => {

    const initialCards = [
        {
            id: 1,
            disabled: false,
            header: {
                default: 'Сказочное заморское яство',
                selectedHover: 'Котэ не одобряет?'
            },
            title: 'Нямушка',
            subtitle: 'с фуа-гра',
            description: '10 порций мышь в подарок',
            bottom: {
                default: 'Чего сидишь? Порадуй котэ, ',
                link: ' купи.',
                selected: 'Печень утки разварная с артишоками.',
                disabled: 'Печалька, с фуа-гра закончился.'
            },
            weight: 0.5
        },
        {
            id: 2,
            disabled: false,
            header: {
                default: 'Сказочное заморское яство',
                selectedHover: 'Котэ не одобряет?'
            },
            title: 'Нямушка',
            subtitle: 'с рыбой',
            description: '20 порций 2 мыши в подарок',
            bottom: {
                default: 'Чего сидишь? Порадуй котэ, ',
                link: ' купи.',
                selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                disabled: 'Печалька, с рыбой закончился.'
            },
            weight: 2
        },
        {
            id: 3,
            disabled: false,
            header: {
                default: 'Сказочное заморское яство',
                selectedHover: 'Котэ не одобряет?'
            },
            title: 'Нямушка',
            subtitle: 'с курой',
            description: '40 порций 5 мышей в подарок заказчик доволен',
            bottom: {
                default: 'Чего сидишь? Порадуй котэ, ',
                link: ' купи.',
                selected: 'Филе из цыплят с трюфелями в бульоне.',
                disabled: 'Печалька, с курой закончился.'
            },
            weight: 5
        },
    ]

    const [cards, setCards] = useState([])


    useEffect(() => {
        setCards(initialCards)
        console.log(cards);
    }, [])

    return { cards }

}

