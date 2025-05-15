import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/cli.ts'),
      formats: ['es'],
      fileName: 'cli',
    },
    rollupOptions: {
      external: [
        'commander',
        'path',
        'fs',
        'process',
        'events',
        'stream',
        'util',
        'os',
        'crypto',
        'child_process',
      ],
    },
  },
});
