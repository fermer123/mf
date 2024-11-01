export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  template: string;
  favicon: string;
  analyzer: string;
  tsconfigPath: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyzerPort: number;
}

export interface BuildOption {
  mode?: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  analyzerPort: number;
}
