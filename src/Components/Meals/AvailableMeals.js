import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem/MealItem";
function AvailableMeals() {

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meal =>
                        <MealItem
                            id={meal.id}
                            key={meal.id}
                            mealName={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />)}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;