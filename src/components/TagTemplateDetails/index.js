import React, { Component } from 'react';
import Post from '../Post';

class TagTemplateDetails extends Component {
  render() {
    const items = [];
    const { data, pageContext } = this.props;
    const tagTitle = pageContext.tag;
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <section className="content">
        <div className="content__inner">
          <h1 className="card__title">Posts tagged: {tagTitle}</h1>
          <div className="card__body">{items}</div>
        </div>
      </section>
    );
  }
}

export default TagTemplateDetails;
