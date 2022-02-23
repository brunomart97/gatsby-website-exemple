import React from 'react';

import Menu from '../components/Menu';
import Layout from '../components/Layout';
import Card from '../components/Card';

const About = () => {
  return (
    <Layout>
      <Menu />
      <h1>About</h1>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card
              titleCard="Card Title 01"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem ab obcaecati omnis corrupti molestiae magnam aut soluta consequatur accusamus rerum recusandae ipsum placeat, cumque facilis, ipsam nam atque quam."
              colorButton="primary"
            />
          </div>
          <div className="col-4">
            <Card
              titleCard="Card Title 02"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem ab obcaecati omnis corrupti molestiae magnam aut soluta consequatur accusamus rerum recusandae ipsum placeat, cumque facilis, ipsam nam atque quam."
              colorButton="warning"
            />
          </div>
          <div className="col-4">
            <Card
              titleCard="Card Title 03"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem ab obcaecati omnis corrupti molestiae magnam aut soluta consequatur accusamus rerum recusandae ipsum placeat, cumque facilis, ipsam nam atque quam."
              colorButton="danger"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;