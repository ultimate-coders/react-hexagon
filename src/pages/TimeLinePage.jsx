import LeftSideBar from '../components/timeline/LeftSideBar';
import RightSideBar from '../components/timeline/RightSideBar';
import Main from '../components/timeline/Main';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TimeLinePage = () => {
    return (
        <Container fluid>
            <Row style={{justifyContent: 'center', backgroundColor: '#eee'}}>
                <Col className='col-2'>
                    <LeftSideBar />
                </Col>
                <Col className='col-6'>
                    <Main />
                </Col>
                <Col className='col-2'>
                    <RightSideBar />
                </Col>
            </Row>
        </Container>
    )
}
export default TimeLinePage;