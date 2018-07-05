import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Post from '../Post';

class CategoryTemplateDetails extends Component {
  componentWillUpdate() {
    if (window.innerWidth < 685) {
      scrollToComponent(this.Content, {
        offset: 0,
        align: 'top',
        duration: 400
      });
    }
  }

  render() {
    const items = [];
    const { data, pageContext } = this.props;
    const { category } = pageContext;
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <div
        className="content"
        ref={section => {
          this.Content = section;
        }}
      >
        <div className="content__inner">
          <h1 className="card__title">{category}</h1>
          <div className="card__body">{items}</div>
        </div>
      </div>
    );
  }
}

export default CategoryTemplateDetails;
