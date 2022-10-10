import React, { FC } from 'react';

export interface ROUTE {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component?: FC<{}>;
}
