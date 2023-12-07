# Asumption
Assume you know the react

# how to generate model from .glb to .tsx
1. `npx gltfjsx public/models/hansome.glb`
1. then move it to `src/models`
1. change the path used in `useGLTF('hansome.glb')` to `useGLTF('./models/hansome.glb')`
1. change the path in `useGLTF.preload('hansome.glb')` to `useGLTF.preload('./models/hansome.glb')` at the end of the file