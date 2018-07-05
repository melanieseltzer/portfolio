import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Sidebar from '../Sidebar';
import './style.scss';

class PageTemplateDetails extends Component {
  componentWillUpdate() {
    if (window.innerWidth < 685) {
      scrollToComponent(this.Content, {
        offset: -50,
        align: 'top',
        duration: 400
      });
    }
  }

  render() {
    const { data } = this.props;
    const page = data.markdownRemark;

    return (
      <div>
        <Sidebar {...this.props} />
        <div
          className="content"
          ref={section => {
            this.Content = section;
          }}
        >
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <div
                className="page__body"
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
