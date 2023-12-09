import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const timerId = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timerId);
  }, []); 

  return (
    <div>
      <h2>🎈Post List</h2>
      {loading && (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      )}

      {!loading && posts.map((post) => (
        <Card key={post.id} style={{ width: '18rem', marginBottom: '20px', float: 'left', width: '400px', height: '350px' }}>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {post.body}
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{post.title}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PostList;
