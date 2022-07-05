import * as React from 'react';
import { PiletApi } from 'app';
import { Link } from 'react-router-dom';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerMenu(() =>
    <Link to="/page-6">Page 6</Link>
  ); 

  app.registerPage('/page-6', Page);

  app.registerTile(() => <div className="teaser">Pilet 6!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
