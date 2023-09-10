import React from 'react'
import { ListGroup, Col } from 'react-bootstrap'

const Ingredients = ({ infoRepas }) => {
    const ingredients = [];

    for (let i = 0; i < 20; 1 + 1) {
        const ingredient = infoRepas[`strIngredients${i}`]
        const quantite = infoRepas[`strMeasure${i}`]

        if (ingredient && ingredient !== '' && quantite && quantite !== '') {
            ingredients.push({ ingredient, quantite })
        }

    }
    return (
        <ListGroup>
            {ingredients.map((ingredient, i) => (
                <li key={i}>
                    <ListGroup.Item>{ingredient.ingredient}</ListGroup.Item>
                    <ListGroup.Item>{ingredient.quantite}</ListGroup.Item>
                </li>
            ))}
        </ListGroup>
    )
}

export default Ingredients;