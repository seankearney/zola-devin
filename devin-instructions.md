## Goal
- Create a theme for [Zola](https://www.getzola.org/)
- The theme should be named "zola-devin"
- Use Vanilla JS for JavaScript
- Use "Tailwind CSS" for style and theme customizations
- Site should be viewable on all modern desktop and mobile browsers
- Update the `/content/about.md` with an overview of you Devin!
- Update `readme.md` explaining how to use the theme and any other information of importance
- Have a `screenshot.png` of the theme in action with a max size of around 2000x1000

## Zola Configuration
- Single language (English)
- Enable search index for `elasticlunr`
- Disable Zola's Sass compilation for the theme
- Configure `taxonomies` for "Tags" only
- Enable RSS 2.0 feed (`/rss.xml`)
- Sample content exists in the `content/` directory
  - Blog posts are in the `content/posts` directory and allow content (images, comments, etc.) to be colocated in a directory

## Layout Elements

**Header Row**
1. Blog Owner Name
2. Navigation
   - About (/about)
   - Blog (/post)
   - Categories (/tags)
   - Archive (/archive)
3. Search Box
   - Overlay results under the search box
   - Real-time results with Enter/button press
   - Highlighting terms in search results not required
4. Light/Dark Theme Toggle

**Footer**
1. Copyright (year) Blog Owner Name
2. "Powered by Zola" link to https://www.getzola.org/
3. "Theme by Devin.ai"
4. Social Network Links (icons and URIs)
5. RSS icon linking to `/rss.xml`

## Zola Theme Options
- Blog Owner Name
- Blog Owner Image (static image asset path/name)
- Blog Owner Description (homepage text)
- Social Links (array of social network and URI)
  - Allow for dynamic addition
  - Default networks: GitHub, StackOverflow, Twitter/X, LinkedIn

## Tailwind Theme
- Support light and dark mode
- Default color scheme and fonts

## Zola Theme Templates

### index.html
- sample url: `/`
- Hero with:
  - Blog Owner Name from `config.toml`
  - Blog Owner Image from `config.toml`
  - Description/About text from `config.toml`
  - Social Network Links (icons and URIs)
- Under the Hero, most recent 3 blog posts as "cards"

### archive.html
- sample url: `/archive`
- List all years (descending)
- List all post titles in each year with a link to the post.
- No post counts, description or summaries required

### post-list.html
- sample url: `/post`
- List blog posts within a section
- Use Zola pagination (10 posts per page, `paginate_path` = "page")
- Show title, `description` (or summary if `description` not present), and date

### post.html
- sample url: `/post/hello-world`
- Renders blog post content from `content/post`. Example: `/content/post/2000-01-01-hello-world/index.md`
- Render comments (if any) from `.yml` files colocated with `index.md`
- Under comment, provide links to "Previous" and "Next" blog posts

### tags/list.html
- Top of page: list all tags (link to `/tags/{tag-name}`)
- Below: list each tag with associated posts

### tags/single.html
- List all blog posts in a tag

### page.html
- sample url: `/about`
- General template for pages
- Similar to `post.html` without comments/paging

## Comments Structure
- id: Monotonically increasing number
- date: Comment date
- name: Comment author
- avatar: URI to author's image
- message: Comment text

Example:
```yml
id: 635428042550000000
date: 2014-08-05T02:57:35.0000000Z
name: Joe Coder
avatar: http://www.gravatar.com/avatar/314826f5d569260f26ac9f26f9e38b8a.jpg?d=robohash
message: I concur.
```