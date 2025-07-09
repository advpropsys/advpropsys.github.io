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
        header: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        code: "ui-monospace, 'SFMono-Regular', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
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
        lightMode: { // Clean minimal theme with matte aurum accents
          light: "#ffffff",        // Pure white background
          lightgray: "#f6f6f6",    // Very light gray for code blocks
          gray: "#666666",         // Medium gray for secondary text
          darkgray: "#2c2c2c",     // Dark gray for body text
          dark: "#000000",         // Pure black for headers
          secondary: "#c9a961",    // Matte gold/aurum for links
          tertiary: "#b8995a",     // Darker matte gold for hover
          highlight: "rgba(201, 169, 97, 0.15)", // Subtle gold highlight
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
