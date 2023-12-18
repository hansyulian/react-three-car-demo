
export type Model3D = {
  modelName: string;
  metadata: Model3DMetadata;
}

export type Model3DMetadata = {
  components: Record<string, ComponentMetadata>
}
export type ComponentMetadata = {
  onClickActions?: ActionMetadata[];
}

export type ActionMetadata = {
  type: 'animation',
  name: string,
  singleExecution?: boolean,
}