import AddPost from "../Post/AddPost";
import AllPost from "../Posts";


const MainSection = ({activeKey}) =>{
    const componentByActiveKey = {
        'allPost': <AllPost />,
        'addPost': <AddPost />
    }

    return (
        <>
            {componentByActiveKey[activeKey]}
        </>
    );
}

export default MainSection;