import React, { Component } from 'react';
import Sidebar from '../Sidebar';

class PageTemplateDetails extends Component {
  render() {
    const { data } = this.props;
    const page = data.markdownRemark;

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="card">
              <h1 className="card__title">{page.frontmatter.title}</h1>
              <div
                className="card__body"
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTemplateDetails;
