import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import ContactForm from '../ContactForm';
import './style.scss';

class PageTemplateDetails extends Component {
  render() {
    const { data } = this.props;
    const page = data.markdownRemark;

    return (
      <React.Fragment>
        <Sidebar {...this.props} />
        <section className="content">
          <div className="content__inner">
            <div className="page">
              <h2 className="page__title-secondary">
                {page.frontmatter.title}
              </h2>
              <div
                className="page__body"
                dangerouslySetInnerHTML={{ __html: page.html }}
              />

              {page.frontmatter.path === '/contact' ? <ContactForm /> : ''}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PageTemplateDetails;
