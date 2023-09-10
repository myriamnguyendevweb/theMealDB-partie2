import Accordion from "react-bootstrap/Accordion";
import { useParams } from 'react-router-dom';
import Ingredients from './Ingredients';
import { AccordionCollapse } from "react-bootstrap";

const Accordeon = ({ infoRepas }) => {
    const params = useParams()
    console.log(params, 'accordion')

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Tous les ingrédients</Accordion.Header>
                <Accordion.Body>
                    <Ingredients infoRepas={infoRepas} />
                </Accordion.Body>
            </Accordion.Item>
            <AccordionCollapse eventkey="1">
                <Accordion.Header>Sens</Accordion.Header>
                <Accordion.Body>
                    {infoRepas.strIntructions}
                </Accordion.Body>
            </AccordionCollapse>
        </Accordion>
    )
}

export default Accordeon;