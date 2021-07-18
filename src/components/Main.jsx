import NewPost from './NewPost';
import PostsList from './PostsList';
import Row from 'react-bootstrap/Row';

const Main = () => {

    return (
        <Row>
            <NewPost />
            <PostsList />
        </Row>
    )
}

export default Main;