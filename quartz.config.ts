import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "advprop",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "advprop.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        darkMode: { // Professional dark theme with aurum accents
          light: "#0d0d0d",        // Very dark background
          lightgray: "#2a2a2a",    // Dark gray for borders/lines
          gray: "#404040",         // Medium gray
          darkgray: "#d4d4d4",     // Light gray text
          dark: "#f5f5f5",         // White text for headers
          secondary: "#d4af37",    // Gold/aurum for links
          tertiary: "#b8860b",     // Darker gold for hover states
          highlight: "rgba(212, 175, 55, 0.15)", // Subtle gold highlight
        },
        lightMode: { // Clean light theme with warm beige tones
          light: "#fefefe",        // Clean white background
          lightgray: "#e8e8e8",    // Light gray borders
          gray: "#888888",         // Medium gray
          darkgray: "#333333",     // Dark gray text
          dark: "#1a1a1a",         // Black for headers
          secondary: "#b8860b",    // Darker gold for links
          tertiary: "#8b7355",     // Warm brown for hover
          highlight: "rgba(184, 134, 11, 0.1)", // Subtle gold highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
        includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
