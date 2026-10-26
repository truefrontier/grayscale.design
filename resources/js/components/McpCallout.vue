<template>
  <section class="McpCallout mt-8 bg-gray-300 rounded-lg p-6 text-gray-800 sm:flex items-center justify-between">
    <p class="mr-5">
      <strong class="font-bold uppercase tracking-wide">Use grayscale design from your AI agent.</strong>
      <span class="block mt-2 text-gray-700">
        Our free MCP server lets Claude, Cursor and other agents build and export these palettes.
      </span>
    </p>
    <button
      type="button"
      @click="copyInstructions"
      class="mt-4 sm:mt-0 whitespace-no-wrap bg-gray-200 rounded border-1 text-blue-600 border-blue-600 px-5 py-4 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 hover:text-white duration-300 uppercase text-sm font-bold tracking-wide"
    >
      <i :class="['fa fa-fw mr-3', copied ? 'fa-check' : 'fa-clone']"></i
      >{{ copied ? 'Copied!' : 'Copy instructions' }}
    </button>
  </section>
</template>

<script>
const MCP_URL = 'https://grayscale-mcp.fly.dev/mcp';

export const MCP_INSTRUCTIONS = `Install the grayscale.design MCP server so you can generate luminance-based color palettes and export them (Tailwind, CSS variables, SCSS, LESS, Stylus, Radix, auto dark mode, SVG).

Remote MCP URL (Streamable HTTP, no auth, read-only): ${MCP_URL}

Claude Code: run
claude mcp add --transport http grayscale-design ${MCP_URL}

Cursor: add this to ~/.cursor/mcp.json (or .cursor/mcp.json in the project):
{
  "mcpServers": {
    "grayscale-design": { "url": "${MCP_URL}" }
  }
}

Any other MCP client: add a remote (Streamable HTTP) server named "grayscale-design" with the URL ${MCP_URL}. If your client only supports stdio servers, use: npx -y mcp-remote ${MCP_URL}

Once it's installed, list the tools (generate_palette, export_palette, luminance_scale, color_info, adjust_shade, suggest_colors, false_color) and confirm they work by calling generate_palette with the color #3b82f6.

Docs and source: https://github.com/truefrontier/grayscale-mcp`;

export default {
  name: 'McpCallout',

  data() {
    return { copied: false };
  },

  methods: {
    async copyInstructions() {
      try {
        await navigator.clipboard.writeText(MCP_INSTRUCTIONS);
      } catch (e) {
        const el = document.createElement('textarea');
        el.value = MCP_INSTRUCTIONS;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      this.copied = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => (this.copied = false), 2000);
    },
  },
};
</script>
