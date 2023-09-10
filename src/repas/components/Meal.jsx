import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import MealService from "../service/MealService";

import { Link } from 'react-router-dom';

const mealService = new MealService();

const Meal = () => {
    const params = useParams();
    const { data, isLoading, isError, error } = useQuery(['repas'], () => repasService.getMealServiceById(params.mealId));

    return (
        <Container fluid className='d-grid min-vh-100'>
            <FetchState isLoading={isLoading} isError={isError} error={error}>

            </FetchState>
        </Container>
    )
}

export default Meal;