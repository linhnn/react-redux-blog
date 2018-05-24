import React, { Component } from 'React';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validation(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    error.categories = "Enter some categories";
  }
  if (!values.content) {
    error.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validation,
  form: 'PostsNewForm'
})(
  connect(null, { createPost } )(PostsNew)
);
