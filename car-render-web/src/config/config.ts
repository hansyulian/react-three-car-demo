console.log('env', process.env);

export const config = {
  baseModelPath: process.env.REACT_APP_MODEL_BASE_PATH || '/models'
}

console.log('config', config);

export type Config = typeof config;