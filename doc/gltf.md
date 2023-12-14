Material not working? here is list of blender materials supported in GLTF format

1. Principled BSDF Shader: The Principled BSDF shader in Blender is the default shader that combines multiple material properties, such as diffuse, specular, roughness, and metallic, into a single shader. It is well-supported in glTF.

2. Textures: Textures applied to materials, including base color, metallic, specular, roughness, normal maps, etc., are supported. Make sure to pack or properly locate your texture files for export.

3. Colors and Transparency: Color properties, transparency, and alpha channels are supported in glTF.

4. Emission: The emission property of materials can be exported, allowing objects to emit light in the glTF scene.

5. Transparency: Blender's transparency settings can be exported, and glTF supports alpha blending for transparent materials.

6. Alpha Modes: Blender supports alpha modes like Opaque, Mask, and Blend, and these can be exported to glTF.

7. Shading Models: Blender supports both metallic-roughness and specular-glossiness shading models, and you can choose the appropriate model during export.

8. Multiple UV Maps: If your model has multiple UV maps, they can be exported to glTF.

9. Vertex Colors: Vertex colors are supported in glTF.

10. Special Materials: Some Blender-specific materials might not be directly supported, but the exporter will attempt to convert them into glTF-compatible equivalents.