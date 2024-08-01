import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {container, WebpackPluginInstance} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import packageJson from '../../package.json';

import {BuildOption} from './types/config';

function buildPlugins({
  paths,
  isDev,
  analyzerPort,
}: BuildOption): WebpackPluginInstance[] {
  const federationConfig = {
    name: 'store',
    filename: 'remoteEntry.js',
    remotes: {
      snackbar: 'snackbar@http://localhost:3002/remoteEntry.js',
    },
    shared: {
      react: {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies.react,
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      },
      '@mui/material': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies['@mui/material'],
      },
      '@mui/styled-engine-sc': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies['@mui/styled-engine-sc'],
      },
      'styled-components': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies['styled-components'],
      },
      '@mui/icons-material': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.devDependencies['@mui/icons-material'],
      },
    },
  };
  return [
    // lerna workspaces
    new container.ModuleFederationPlugin(federationConfig),

    new HtmlWebpackPlugin({
      template: paths.template,
    }),
    isDev ? new ForkTsCheckerWebpackPlugin() : undefined,
    new webpack.DefinePlugin({
      isDev: JSON.stringify(isDev),
      baseURL: JSON.stringify('http://localhost:3000/'),
    }),
    isDev ? new webpack.HotModuleReplacementPlugin() : undefined,
    isDev
      ? new BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: 'server',
          reportFilename: paths.analyzer,
          analyzerPort,
        })
      : undefined,
  ];
}

export default buildPlugins;
