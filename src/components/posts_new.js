import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class PostsNew extends Component {
  onSubmit(props){
    this.props.createPost(props)
    .then(()=> {
      browserHistory.push('/');
    });
  }

  render() {
    const {fields: {title, categories, content},handleSubmit} = this.props;

    return (
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <h3>Create A New Post</h3>
            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
              <label>Title</label>
              <input type="text" className="form-control" {...title} />
              <div className="text-help">
                  {title.touched ? title.error : ''}
              </div>
            </div>
            <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
              <label>Categories</label>
              <input type="text" className="form-control" {...categories} />
              <div className="text-help">
                  {categories.touched ? categories.error : ''}
              </div>
            </div>
            <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
              <label>Content</label>
              <textarea className="form-control" {...content} ></textarea>
              <div className="text-help">
                  {content.touched ? content.error : ''}
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/" className="btn btn-danger" >Cancel</Link>
          </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a username';
  }

  if(!values.categories){
    errors.categories = 'Enter categories';
  }

  if(!values.content){
    errors.content = 'Enter content';
  }

  return errors;
}

export default reduxForm({
  form:'PostsNewForm',
  fields:['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
