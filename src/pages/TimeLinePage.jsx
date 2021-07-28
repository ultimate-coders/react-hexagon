import { useState } from 'react';
import LeftSideBar from '../components/timeline/LeftSideBar';
import RightSideBar from '../components/timeline/RightSideBar';
import Main from '../components/timeline/Main';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/header'


const TimeLinePage = () => {
    const [category, setCategory] = useState(null);

    return (
        <>
        
        <Container fluid>
            <Row style={{justifyContent: 'center', backgroundColor: '#eee'}}>
                <Col className='col-2'>
                    <LeftSideBar category={category} setCategory={setCategory} />
                </Col>
                <Col className='col-6'>
                    <Main category={category} />
                </Col>
                <Col className='col-2'>
                    <RightSideBar />
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default TimeLinePage;