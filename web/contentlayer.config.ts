import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  // filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    external_url: { type: 'string', required: false },
    description: { type: "string", required: true },
    description_short: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    cover: { type: "string", required: true },
    cover_video: { type: "string", required: false },
    related: { type: "list", of: { type: "string" }, required: false },
    featured: { type: "boolean", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/works/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
