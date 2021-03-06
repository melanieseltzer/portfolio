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
      <section className="content">
        <div className="content__inner">
          <h1 className="card__title">Projects made with: {techTitle}</h1>
          <div className="card__body">{items}</div>
        </div>
      </section>
    );
  }
}

export default TechTemplateDetails;
