// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';

import About from '../../components/TestingSites/about';
import Disclaimer from '../../components/TestingSites/disclaimer';
import FAQs from '../../components/TestingSites/faqs';
import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';

const HowPage = () => (
  <Layout>
    <SEO title="How it Works | COVID-19 Testing Locations" />
    <div className="">
      <div className="container-fluid ts-hero ts-section">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="mb-0">How it Works</h1>
          </div>
        </div>
      </div>
      <Disclaimer />
      <div className="container-fluid ts-main-area ts-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12">
              <p>This crowdsourced, regularly-updated listing of COVID-19 testing locations leverages three common services to make data more manageable and accessible:</p>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Google Sheets</h3>
                  <p className="card-text">The core data for this project is stored in a single Google Sheet for each US state, providing a central data source that can be managed by multiple trusted stakeholders.</p>
                  <a href="/" className="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Postman Collections</h3>
                  <p className="card-text">Using a Postman collection, data is pulled from Google using the Google Sheets API and then updates an API, documentation, and publishes data to GitHub for display to end users.</p>
                  <a href="/" target="_blank" className="card-link">View COVID-19 Collections</a>
                  <a href="https://learning.postman.com/docs/postman/collections/intro-to-collections/" target="_blank" rel="noopener noreferrer" className="card-link">Intro to Postman Collections</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">GitHub</h3>
                  <p className="card-text">GitHub is used to publish machine-readable open data for wider consumption, and is also used for the hosting of web and mobile applications.</p>
                  <a href="https://github.com/postmanlabs/covid-19-apis" className="card-link">View project on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="youmayalsolike">
        <div className="container-fluid ts-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <CallToActionConsumers />
              </div>
              <div className="col-sm-6">
                <CallToActionDevs />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ts-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <About />
              </div>
              <div className="col-sm-6">
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default HowPage;
