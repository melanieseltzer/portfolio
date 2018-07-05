import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Project from '../Project';

class TechTemplateDetails extends Component {
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
    const techTitle = pageContext.tech;
    const projects = data.allMarkdownRemark.edges;
    projects.forEach(project => {
      items.push(<Project data={project} key={project.node.fields.slug} />);
    });

    return (
      <div
        className="content"
        ref={section => {
          this.Content = section;
        }}
      >
        <div className="content__inner">
          <h1 className="card__title">
            Projects Made With: &quot;{techTitle}&quot;
          </h1>
          <div className="card__body">{items}</div>
        </div>
      </div>
    );
  }
}

export default TechTemplateDetails;
