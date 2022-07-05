import * as React from "react";
import { PiletApi } from "app";
import { Link } from "react-router-dom";

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerMenu(() =>
    <Link to="/page-3">Page 3</Link>
  );

  app.registerPage('/page-3', Page);

  app.registerTile(() => <div className="teaser">Pilet 3!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
