import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

import {BuildOption} from './types/config';

function buildDevServer(option: BuildOption): DevServerConfiguration {
  const {port} = option;
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
export default buildDevServer;
