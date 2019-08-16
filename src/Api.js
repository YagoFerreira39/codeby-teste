import React, {useState, useEffect} from 'react';

export const Api = () => {

    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=avocado&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.json();
        const hits = data.hits;
        setItems(hits);

        console.log(hits);
    };

    return [items];
}