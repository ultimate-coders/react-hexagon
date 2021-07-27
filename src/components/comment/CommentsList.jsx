import Comment from './Comment';

const CommentsList = ({ comments, onChangeComments }) => {

    return (
        <div className='comment_list_container'>
            {
                comments.reverse().map(comment => <Comment onChangeComments={onChangeComments} comment={comment} />)
            }
        </div>
    )
}

export default CommentsList;