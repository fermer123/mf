import {RuleSetRule} from 'webpack';

function buildLoaders(): RuleSetRule[] {
  // const imageLodaer = {
  //   test: /\.(png|jpg|jpeg|gif)$/i,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: 'assets/image/[name][ext]',
  //   },
  // };

  // const fontsLoader = {
  //   test: /\.(woff2?|eot|ttf|otf)$/i,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: 'assets/fonts/[name][ext]',
  //   },
  // };

  // const cssLoader = {
  //   test: /\.s(a|c)ss$/,
  //   use: [
  //     options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: {
  //           auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
  //           localIdentName: options.isDev ? '[path][name]__[local]' : '[path][name]__[local]--[hash:base64:5]',
  //         },
  //       },
  //     },
  //     'sass-loader',
  //   ],
  // };

  // const svgLoader = {
  //   test: /\.svg$/i,
  //   type: 'asset/resource',
  //   resourceQuery: /url/,
  //   generator: {
  //     filename: 'assets/image/[name][ext]',
  //   },
  // };

  // const svgrLoader = {
  //   test: /\.svg/i,
  //   resourceQuery: {not: [/url/]}, // exclude react component if *.svg?url
  //   use: [
  //     {
  //       loader: '@svgr/webpack',
  //       options: {
  //         typescript: true,
  //         ext: 'tsx',
  //       },
  //     },
  //   ],
  // };

  const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}

export default buildLoaders;
