import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActionSideBar from "../ActionSideBar";
import Header from "../Header"
import AllPost from "../Posts";
import MainSection from '../MainSection';
import { useState } from 'react';


const Home = () => {
    const [activeKey, setActiveKey] = useState('allPost');

    return (
        <>
            <Header />

            <div className='m-5 mt-2'>
                <Row>
                    <Col sm={3}>
                        <ActionSideBar setActiveKey={setActiveKey} />
                    </Col>
                    <Col sm={9}>
                        <MainSection activeKey={activeKey}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home;