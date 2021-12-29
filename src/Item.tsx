import { useEffect } from 'react';
import './Item.css';

interface Props {
    description: string
    time: string
    image: string
    name: string
}

const Item = (props: Props) => {

    return (
        <div className="item">
            <img className="image" src={props.image} />
            <div className="content">
                <h2>{props.name}</h2>
                <div className="time">{props.time}</div>
                <div className="desciption">{props.description}</div>
            </div>
        </div>
    )
}

export default Item