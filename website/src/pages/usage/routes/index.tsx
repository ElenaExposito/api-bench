import React from 'react';
import {
  Lang,
} from '../../../components/lang.tsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../../components/layout.tsx';

const Route = () => <Layout
  Outlet={<>
    <div className='title-card'>
      <h1><Lang lnkey='routes.title'/></h1>
      <p><Lang lnkey='routes.description'/></p>
    </div>
    <div className='card'>
      <h2><Lang lnkey='routes.example.title'/></h2>
      <div>
        <p><Lang lnkey='routes.example.description'/></p>
        <SyntaxHighlighter language='typescript'>{`import {
  Task,
} from '@idrinth/api-bench';
  
export default (apiURL, apiPassword): Task => {
  main: {
    method: 'get',
    url: apiURL + '?' + apiPassword,
  },
};
      `}</SyntaxHighlighter>
      </div>
    </div>
  </>}
  page='routes'
  path='/usage/routes'
/>;
export default Route;
