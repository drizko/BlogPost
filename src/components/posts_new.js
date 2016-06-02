import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {

  render(){
    const { fields: {title, categories, content}, handleSubmit } = this.props;
    // const { title, categories, content } = this.props.fields

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="error text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a title please';
  }
  return errors;
}

// connect arguments:
//    1st: mapStateToProps
//    2nd: mapDispatchToProps
// reduxForm arguments:
//    1st: form config
//    2nd: mapStateToProps
//    3rd: mapDispatchToProps

// Inject props into our components from reduxForm library
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
