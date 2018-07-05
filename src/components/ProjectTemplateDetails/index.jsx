import React, { Component } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import fontawesome from '@fortawesome/fontawesome';
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';

fontawesome.library.add(faGithubAlt);

class ProjectTemplateDetails extends Component {
  render() {
    const { data } = this.props;
    const project = data.markdownRemark;
    const tech = project.fields.techSlugs;

    const homeBlock = (
      <div>
        <Link className="item-single__home-button" to="/projects">
          All Projects
        </Link>
      </div>
    );

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
            {homeBlock}
            <h1 className="item-single__title">
              {project.frontmatter.title}
              <a
                className="repo"
                href={project.frontmatter.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-alt" />
              </a>
            </h1>
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
            <hr />
            {tagsBlock}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTemplateDetails;
