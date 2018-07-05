import React, { Component } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

class ProjectTemplateDetails extends Component {
  render() {
    const { data } = this.props;
    const { subtitle, author } = data.site.siteMetadata;
    const project = data.markdownRemark;
    const tech = project.fields.techSlugs;

    const tagsBlock = (
      <div className="item-single__tags">
        <ul className="item-single__tags-list">
          {tech &&
            tech.map((tag, i) => (
              <li className="item-single__tags-list-item" key={tag}>
                <Link to={tag} className="item-single__tags-list-item-link">
                  {project.frontmatter.tech[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    return (
      <div>
        <div className="item-single">
          <div className="item-single__inner">
            <h1 className="item-single__title">{project.frontmatter.title}</h1>
            <div
              className="item-single__body"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
            <div className="item-single__date">
              <em>
                Published{' '}
                {moment(project.frontmatter.date).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="item-single__footer">
            {tagsBlock}
            <hr />
            <p className="item-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTemplateDetails;
