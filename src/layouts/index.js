import React from 'react';
import Helmet from 'react-helmet';
import { Headline, Header } from '../shared/Headline';

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet title="Home | Artivest" />
    <Header>
      <Headline white>Welcome to Artivest</Headline>
    </Header>
    {children()}
  </div>;

export default TemplateWrapper;
