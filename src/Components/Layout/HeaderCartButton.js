import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props){

    const [btnIsActive, setBtnIsActive] = useState(false);
    
    const headerCtx = useContext(CartContext);
    
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${btnIsActive ? classes.bump: ''}`;
    
    useEffect(() => {
        if (items.length === 0){
            return;
        }
        setBtnIsActive(true);
        const timer = setTimeout(() => {
            setBtnIsActive(false);
        },300);

        return () => {
            clearTimeout(timer);
        };

    },[items]);

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>
            {headerCtx.items.reduce((curNumber, item) => {
                return curNumber + item.amount;
            }, 0)}
        </span>
    
    </button>);
}

export default HeaderCartButton;