import Comment from './Comment';

const CommentsList = ({ comments }) => {

    return (
        <div className='comment_list_container'>
            {
                comments.map(comment => <Comment comment={comment} />)
            }
        </div>
    )
}

export default CommentsList;