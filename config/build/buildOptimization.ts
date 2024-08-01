function buildOptimization() {
  return {
    chunkIds: 'named' as const,
    usedExports: true,
    minimize: true,
    splitChunks: {
      chunks: 'async' as const,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'async' as const,
          enforce: true,
        },
      },
    },
  };
}
export default buildOptimization;
