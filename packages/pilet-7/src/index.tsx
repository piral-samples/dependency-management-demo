import * as React from 'react';
import { PiletApi } from 'app';
import { Link } from 'react-router-dom';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerMenu(() =>
    <Link to="/page-7">Page 7</Link>
  );

  app.registerPage('/page-7', Page);

  app.registerTile(() => <div className="teaser">Pilet 7!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
