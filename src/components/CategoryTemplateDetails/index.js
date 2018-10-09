import React, { Component } from 'react';
import Post from '../Post';

class CategoryTemplateDetails extends Component {
  render() {
    const items = [];
    const { data, pageContext } = this.props;
    const { category } = pageContext;
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <section className="content">
        <div className="content__inner">
          <h1 className="card__title">All posts in "{category}"</h1>
          <div className="card__body">{items}</div>
        </div>
      </section>
    );
  }
}

export default CategoryTemplateDetails;
