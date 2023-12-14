
export type Model3D = {
  modelPath: string;
  metadata: Model3DMetadata;
}

export type Model3DMetadata = {
  components: Record<string, ComponentMetadata>
}
export type ComponentMetadata = {
  animation?: AnimationMetadata;
}
export type AnimationMetadata = {
  eventType?: 'onClick',
  rotation: {
    x: number, // magnitude in Math.PI, 360 degree = 2Pi, thus inputting 0.6 means 60% of 180 degree
    y: number,
    z: number,
    duration: number,
  },
}