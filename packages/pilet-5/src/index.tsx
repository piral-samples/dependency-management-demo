import * as React from 'react';
import { PiletApi } from 'app';
import { Link } from 'react-router-dom';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerMenu(() =>
    <Link to="/page-5">Page 5</Link>
  );

  app.registerPage('/page-5', Page);

  app.registerTile(() => <div className="teaser">Pilet 5!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
