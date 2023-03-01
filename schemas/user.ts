import { defineField, defineType } from "sanity";
import slugify from "@sindresorhus/slugify";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "firstname",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "lastname",
      title: "Lastname",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) =>
          slugify(
            `${doc.firstname}-${doc.lastname}-${Math.random()
              .toString(36)
              .substring(2, 6)}`
          ),
        maxLength: 96,
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
    }),
    // defineField({
    //   name: "avatar",
    //   title: "Avatar",
    //   type: "image",
    //   options: {
    //     accept: "image/png, image/jpeg, image.jpg",
    //     hotspot: true,
    //   },
    // }),
  ],
});
