import React, {useContext} from "react";
import classes from "./MealItem.module.css";
import Card from "../../UI/Card";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price}`;
    
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.mealName,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealName}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem;