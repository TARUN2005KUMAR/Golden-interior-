import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Portfolio Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Home Interior Works", value: "home_interior" },
          { title: "Modern Kitchens", value: "kitchen" },
          { title: "Elevations", value: "elevation" },
          { title: "Wood Work", value: "wood" },
          { title: "Doors", value: "door" },
          { title: "UPVC Profile Windows", value: "window" },
          { title: "Custom Furniture", value: "furniture" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "aspectRatio",
      title: "Image Aspect Ratio",
      type: "string",
      options: {
        list: [
          { title: "Square (1:1)", value: "square" },
          { title: "Portrait (3:4)", value: "portrait" },
          { title: "Landscape (4:3)", value: "landscape" },
          { title: "Wide (16:9)", value: "video" },
        ],
      },
      initialValue: "square",
      description: "Controls the size/shape of the image in the portfolio grid.",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "year",
      title: "Completion Year",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
