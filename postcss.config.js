const fs = require('fs');
const path = require('path');

// Read iterations from build-config.json
let postcssCpuBurnIterations = 0;
try {
  const configPath = path.join(process.cwd(), 'build-config.json');
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    postcssCpuBurnIterations = config.postcssCpuBurnIterations || 0;
    if (postcssCpuBurnIterations > 0) {
      console.log(`[postcss.config] CPU burn enabled: ${postcssCpuBurnIterations.toLocaleString()} iterations`);
    }
  }
} catch (e) {
  // Ignore errors
}

// Inline the CPU burn plugin
const cpuBurnPlugin = (opts = {}) => {
  const iterations = opts.iterations || 0;
  return {
    postcssPlugin: 'postcss-cpu-burn',
    Once(root) {
      if (iterations > 0) {
        let x = 0;
        for (let i = 0; i < iterations; i++) {
          x = Math.sin(x + i * 0.0001) * Math.cos(x - i * 0.0001);
          x = Math.sqrt(Math.abs(x) + 1) * (i % 2 === 0 ? 1 : -1);
          x = Math.atan2(x, i + 1) + Math.log(Math.abs(x) + 1);
        }
        root.prepend({ text: `CPU burn: ${iterations} iterations, result: ${x.toFixed(6)}` });
      }
    }
  };
};
cpuBurnPlugin.postcss = true;

module.exports = {
  plugins: [
    ...(postcssCpuBurnIterations > 0 ? [cpuBurnPlugin({ iterations: postcssCpuBurnIterations })] : []),
    require('@tailwindcss/postcss'),
  ],
};
