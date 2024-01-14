import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import ecosystemMfeConfig from './modulefederation.config';
import rspack from "@rspack/core";

export default defineConfig({
  server: {
    port: 8080,
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience'
    },
  },
  tools: {
    rspack: {
      output: {
        publicPath: 'http://localhost:8080',
      },
      plugins: [new rspack.container.ModuleFederationPlugin(ecosystemMfeConfig)],
    },
  },
  plugins: [pluginReact()],
});
