import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import axios from 'axios';
class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('/posts').then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  postSelectHandler = id => {
    this.setState({ selectedPostId: id });
  };
  render() {
    let posts = this.state.posts.map(post => {
      return (
        <Link to={'/' + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectHandler(post.id)}
          />
        </Link>
      );
    });
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>;
        <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
