// Let's create our own hook

import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useMenu=(resId)=>{
<<<<<<< HEAD
    const [menu,setMenu]=useState(null);
=======
    const [menu,setmenu]=useState(null);
>>>>>>> 14e420c94b7650641b8051f6e19074ec7c8ff8f7

    useEffect(() => {
      getRestaurantInfo();
    }, []);


    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+resId
        );
        const json = await data.json();
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
<<<<<<< HEAD
        setMenu(json.data);
=======
        setmenu(json.data);
>>>>>>> 14e420c94b7650641b8051f6e19074ec7c8ff8f7
      }
    return menu;
};

export default useMenu;