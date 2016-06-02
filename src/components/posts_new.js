import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate user to '/'
        this.context.router.push('/');
      })
  }

  render(){

    const { fields: {title, categories, content}, handleSubmit } = this.props;
    // const { title, categories, content } = this.props.fields

    return (


      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'text-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'text-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
          {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'text-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
          {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a title please';
  }
  if(!values.categories){
    errors.categories = 'Enter categories please';
  }
  if(!values.content){
    errors.content = 'Enter content please';
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
