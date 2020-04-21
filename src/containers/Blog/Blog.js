import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Posts
                </NavLink>
                <li>
                  <NavLink
                    to={{
                      pathname: '/new-post'
                    }}
                  >
                    New Post
                  </NavLink>
                </li>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" component={Posts} />
          <Route path="/new-post" component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
