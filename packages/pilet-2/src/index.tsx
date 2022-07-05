import * as React from 'react';
import { PiletApi } from 'app';
import { getPayload } from 'lib';

export function setup(app: PiletApi) {
  const content = getPayload();
  
  app.registerTile(() => <div className="teaser">Pilet 2: {content.length}!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
