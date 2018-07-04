import React, { Component } from 'react';
import Project from '../Project';

class TechTemplateDetails extends Component {
  render() {
    const items = [];
    const { data, pageContext } = this.props;
    const techTitle = pageContext.tech;
    const projects = data.allMarkdownRemark.edges;
    projects.forEach(project => {
      items.push(<Project data={project} key={project.node.fields.slug} />);
    });

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">Tech: &quot;{techTitle}&quot;</h1>
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechTemplateDetails;
