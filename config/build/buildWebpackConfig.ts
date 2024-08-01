import {type Configuration} from 'webpack';

import {BuildOption} from './types/config';
import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildOptimization from './buildOptimization';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';

function buildWebpackConfig(option: BuildOption): Configuration {
  const {paths, mode, isDev} = option;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
      chunkFilename: '[name].[contenthash].js',
      publicPath: 'auto',
    },

    optimization: buildOptimization(),
    resolve: buildResolvers(option),
    devServer: isDev ? buildDevServer(option) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: buildPlugins(option),
    module: {
      rules: buildLoaders(),
    },
  };
}

export default buildWebpackConfig;
