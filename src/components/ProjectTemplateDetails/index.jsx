import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './style.scss';

class ProjectTemplateDetails extends React.Component {
  render() {
    const { data } = this.props;
    const { subtitle, author } = data.site.siteMetadata;
    const project = data.markdownRemark;
    const tech = project.fields.techSlugs;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          All Projects
        </Link>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tech &&
            tech.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {project.frontmatter.tech[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{project.frontmatter.title}</h1>
            <div
              className="post-single__body"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
            <div className="post-single__date">
              <em>
                Published{' '}
                {moment(project.frontmatter.date).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
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
