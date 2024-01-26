import { useEffect, useState } from "react";
import { fetchAllPosts } from "../../services/post";
import { Card } from "react-bootstrap";


const AllPost = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts()
            .then((response) => {
                setAllPosts(response.data);
            })
            .catch((error) => {

            })
    }, [])

    return (
        <>
            {JSON.stringify(allPosts)}
            {
                allPosts.map((post) => (
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Created At - {post.published_at}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                                Publisher - {post.author_username}
                            </Card.Subtitle>
                            <Card.Text>
                                {post.description}
                            </Card.Text>
                            <Card.Link href="#">Edit</Card.Link>
                            <Card.Link href="#">Delete</Card.Link>
                        </Card.Body>
                    </Card>

                ))
            }
        </>
    )
}

export default AllPost;