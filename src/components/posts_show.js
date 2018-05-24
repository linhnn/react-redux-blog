import React, { Component } from 'react';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h1>{post.title}</h1>
        <h6>Categories: {post.categories}</h6>
        <h2>{post.content}</h2>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProp) {
  return { post: posts[ownProp.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
