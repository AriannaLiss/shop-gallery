import React from "react";
import { data } from "../../data/data";
import Card from "../card";
import './app.css'

const newBD = data.map((element) => {
    return {
        name: element.title,
        img: element.image,
        price: element.price,
        rate: element.rating.rate
    }
})

newBD[7].label = 'Free sheeping';
newBD[3].label = 'Popular';

const App = () => {
    return(
        <div className="container">
            {newBD.map((e) => <Card product={e}/>)}
        </div>
    )
}

export default App;
