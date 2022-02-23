import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Icons from '../Icons';

import './styles.scss';

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: {
          codepen,
          facebook,
          github,
        },
        copyright,
        description
      }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            codepen
            facebook
            github
          }
          copyright
          description
        }
      }
    }
  `)

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4">
          <div className="col-6 mb-3">
            {description}
          </div>
          <div className="socialMediaBox col-6 d-flex justify-content-end align-items-center">
            <a href={github} target="_blank">
              <Icons.Github />
            </a>
            <a href={codepen} target="_blank">
              <Icons.Codepen />
            </a>
            <a href={facebook} target="_blank">
              <Icons.Facebook />
            </a>
          </div>
          <hr/>
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;