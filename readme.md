# Devin.Ai - Hello World Blog Site Template
-------------------------------------------

## Overview

This repo contains a [Zola](https://www.getzola.org/) theme that can be used for a personal/developer blog. 

Should contains:

- A special home page template.
  - Should contain at least one hero image of the blog author
  - Should contain an area for a brief bio/about section
  - Should contain an area for 'latest news' that will show the newest 5 blog posts
- The navigation should be in the header with links to
  - Home
  - About
  - Archive
  - Categories
- There should be a secondary navigation area with links to various external sites. The links should be logo/icons for the network. The list includes, but not limited to:
  - GitHub
  - Stack Overflow
  - Twitter
  - Linked In
- The blog listing template should page the blog posts

## Zola Content Structure

The structure of the blog content in the Zola site will be as follows:

```
./content/
  |- about.md
  |- post/
    |- 2000-01-01-this-is-a-blog-post/
      |- index.md
    |- _index.md
```

## Technologies

- [Zola](https://www.getzola.org/)
- Vanilla JS
- Tailwind CSS
- SCSS for any custom styles
