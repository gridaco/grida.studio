import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const Artist = defineNestedType(() => ({
  name: "Artist",
  fields: {
    name: { type: "string" },
    role: { type: "string" },
    instagram: { type: "string" },
  },
}));

export const Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `**/*.md`,
  // filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    external_url: { type: "string", required: false },
    description: { type: "string", required: true },
    description_short: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    cover: { type: "string", required: true },
    cover_video: { type: "string", required: false },
    cover_foreground: { type: "string", required: false },
    cover_background: { type: "string", required: false },
    related: { type: "list", of: { type: "string" }, required: false },
    featured: { type: "boolean", required: false },
    artists: {
      type: "list",
      of: {
        type: "nested",
        def: Artist.def,
      },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (work) => `/works/${work._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "works", documentTypes: [Work] });
