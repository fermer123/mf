import path from 'path';

import buildWebpackConfig from './config/build/buildWebpackConfig';
import {BuildEnv, BuildPaths} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.join(__dirname, 'src/index.ts'),
    output: path.join(__dirname, 'build'),
    template: path.join(__dirname, 'public/index.html'),
    analyzer: path.join(__dirname, 'dist/bundle-analysis.html'),
    tsconfigPath: path.join(__dirname, 'tsconfig.json'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3001;
  const analyzerPort = env.analyzerPort || 8888;
  const isDev = mode === 'development';
  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    analyzerPort,
  });

  return config;
};
