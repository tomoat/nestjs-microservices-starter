export interface Config {
  nest?: NestConfig;
  cors?: CorsConfig;
  database?: Database;
  swagger?: SwaggerConfig;
  graphql?: GraphqlConfig;
  security?: SecurityConfig;
}

export interface NestConfig {
  url: string;
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}

export interface Database {
  host: string;
  port: number;
}
