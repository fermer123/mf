import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import {ResolveOptions} from 'webpack';

import {BuildOption} from './types/config';

function buildResolvers({paths}: BuildOption): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: paths.tsconfigPath,
      }),
    ],
  };
}

export default buildResolvers;
