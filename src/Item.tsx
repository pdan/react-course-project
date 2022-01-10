import { useEffect, useContext, useReducer } from 'react';
import './Item.css';
// import { Store } from './App'
// import { appContext } from './store'

interface Props {
    description: string
    time: string
    image: string
    name: string
}

const Item = (props: Props) => {

    // const { dashboard } = useContext<Store>(appContext)

    // useEffect(() => {
    //     console.log(dashboard)
    // }, [])
    // return (
    //     <div className="item">
    //         Item Store
    //         {dashboard.map(v => <div>{v}</div>)}
    //     </div>
    // )
}

export default Item