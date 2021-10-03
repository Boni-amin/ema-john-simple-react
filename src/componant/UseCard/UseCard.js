import { useState } from "react"
import { useEffect } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const UseCard = products =>{
    const [card, setCard] = useState([])

    useEffect(()=>{
        if(products.length){
            const saveCard = getStoredCart()
            const storeCard = [] 
            for(const key in saveCard){
            const addedProduct = products.find(product => product.key === key)
                if(addedProduct){
                    const quantity = saveCard[key]
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storeCard.push(addedProduct)
                }
                
            }
            setCard(storeCard)
        }
    } ,[products])
    return [card, setCard]
}

export default UseCard;