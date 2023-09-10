import { useQuery } from "@tanstack/react-query";
import CategorieService from "../service/CategoriesService";
import FetchState from "../../components/FetchState/FetchState";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";

const categoriesService = new CategorieService()

const categories = () => {
    const { data, isLoading, isError, error } = useQuery(['categories'], () => categoriesService.getAllCategories());

    return (
        <Container fluid className='d-grid min-vh-100'>
            <FetchState isLoading={isLoading} isError={isError} error={error}>
                <Container>
                    <h1 className='text-center'>Liste des repas des catégories</h1>
                    <Row>
                        {data?.map((Category) => (
                            <Col key={Category.strCategory} xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Link to={`/category/${category.strCategory}`}>
                                    {category.strCategory}
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </FetchState>
        </Container>
    )
}

export default categories