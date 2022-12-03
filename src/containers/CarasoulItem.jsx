import React, { useState, useEffect } from 'react'
import "./Carasoul.scss";

const CarasoulItem = ({ data, delay, duration }) => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => { setNumber(number => (number + 1) % data.length) }, duration);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="carasoul__item" id="carasoul__item2">
            {data.map((item, index) => {
                return (<img style={{transition: `all ${delay}s`}} className={number === index ? "carasoul__img__active" : "carasoul__img__not-active"} src={item} />)
            })}
        </div>
    )
}

CarasoulItem.defaultProps = {
    data: [],
    delay: 1,
    duration: 2000
}

export default CarasoulItem