// PostItem 컴포넌트입니다.

interface Props {
  post: Post;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className='PostItem'>
      <div>
        <span className='id'>No. {post.id}</span>
        <span className='title'>- {post.title}</span>
      </div>
      <p className='body'>{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
