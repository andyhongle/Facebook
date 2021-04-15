import React from 'react';
import CommentIndexContainer from '../comments/comments_index_container';
import CommentFormContainer from '../comments/comments_form_container';


class PostIndex extends React.Component {
    constructor(props) {
        super(props);
       
        
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchPosts();
        
    }

    render () {
        return (
            <ul>
                {this.props.posts.reverse().map(post => {
            
                    let createdTime = new Date(post.created_at).toDateString();
                    let postOwner = this.props.users[post.author_id]
                    return (
                        <li className='post-item' key={post.id}>
                            <div className='post-item-header'>
                                <div className='post-item-name-date-image'>
                                    <a href={`#/users/${post.author_id}`}>
                                        <img className='post-owner-image' src={postOwner.profile_photo} /> 
                                    </a> 
                                    <div className='post-item-name-date'>
                                        <div className='post-owner'>
                                            <a href={`#/users/${post.author_id}`}>{postOwner.first_name} {postOwner.last_name}</a> 
                                        </div> 
                                        <div className='post-date'>{createdTime}</div>
                                    </div>
                                   
                                </div>
                                <div className='edit-delete-dropdown'>
                                    <button className='edit-delete-button'>...</button>
                                    <div className='edit-delete-dropdown-content'>
                                        <div className='delete-post-button' onClick={() => this.props.deletePost(post.id)}>Delete Post</div>
                                    </div>
                                </div>
                            </div>
                            <div className='post-body'>{post.body}</div>
                            <img className='post-image' src={post.photo}/>
                            <div className='like-comment-buttons'>
                                <button className='like-button'>
                                    <img className='like-icon' src={likeIconURL}/>
                                    <div className='like-text'>Like</div>
                                </button>
                                <button className='comment-button'>
                                    <img className='comment-icon' src={commentIconURL} />
                                    <div className='comment-text'>Comment</div>
                                </button>
                            </div>
                            <CommentIndexContainer post={post} postOwner={postOwner}/>
                            <CommentFormContainer post={post} users={this.props.users}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default PostIndex