import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import FetchState from '../../components/FetchState/FetchState';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap';
import Col from 'react-bootstrap';
import Button from 'react-bootstrap';
import CategoryService from "../service/CategoryService";
import { Link } from 'react-router-dom';

const categoryService = new CategoryService();

const Category = () => {
    const params = useParams();
    const { data, isLoading, isError, error } = useQuery(['category', params.CategoryName], () => categoryService.getCategoryByName());

    return (
        <Container fluid className='d-grid min-vh-100'>
            <FetchState isLoading={isLoading} isError={isError} error={error}>
                <Container>
                    <Link to="/" className='text-center'>Liste des repas des catégories</Link>
                </Container>
                <Row>
                    {data?.map((meal) => (
                        <Col key={meal.strMeal} xs={12} sm={6} md={4} lg={3} xl={2} className='text-left'>
                            <Link to={`/category/${params.categoryName}`}>
                                <Card>
                                    <Card.Img src={`${meal.strMealThumb}`} />
                                    <Card.Body>
                                        <Card.Title>{meal.strMeal}</Card.Title>
                                        <Button>Voir la recette complète</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </FetchState>
        </Container>
    )
}

export default Category