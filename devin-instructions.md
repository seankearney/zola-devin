# The Goal

- We are creating a theme for [Zola](https://www.getzola.org/)
- The sample content for the theme is in the `content/` directory
- Any/all JavaScript should be Vanilla JS
- We should use "Tailwind CSS" for any/all style and theme customizations

## Zola

- Enable search index
- Single language (English)
- `taxonomies` should be configured for "Tags" only
- Blog posts are created so that content can be colocated in a directory

## Description of Layout Elements

1. Header row
   1. [Blog Owner Name]
   2. Navigation
      1. About (/about)
      2. Blog (/post)
      3. Categories (/tags)
      4. Archive (/archive)
   3. Search box
2. Footer
   1. Copyright (year) [Blog Owner Name]
   2. Design by Devin.ai
   3. Powered by Zola
   4. Social Network Links for each configured social network, show the social network icon and link to uri.
   5. rss icon linking to `/rss.xml`

## Theme Options

- Blog Owner Name: The name of the person who blogs on this site
- Blog Owner Image: The path/name of static image asset to be used for the blog owner
- Blog Owner Description: Text used on the homepage
- Social Links: an array of social network and uri

## Description of Zola Theme Templates

### `index.html`

- The default document of the site. (i.e. the home page).
- Should have a "Hero" that contains
-   the [Blog Owner Name] as configured in the `config.toml` file
-   the [Blog Owner Image] as configured in the `config.toml` file
-   description/about text as configured in the `config.toml` file.
-   Social Network Links for each configured social network, show the social network icon and link to uri.
- Under the hero, should show the most recent 3 blog posts as "cards"

### `post.html`

- A page that renders a blog post under the `/post` section
- At the bottom of the page, will have links to "Previous" and "Next" blog posts as provided via Zola
- Underneath the previous/next links, render comments
  - Comments may or may not exist. 
  - Comments are `.yml` files colocated in the same directory as the `index.md` document of the blog post.

### `post-list.html`

- A page that lists out all blog posts in its section
- The page should use Zola pagination. 10 posts per page. the `paginate_path` should be "page"

### `tags/list.html`

- On the top of the page all tags should be rendered out. Clicking on a specific tag will take you to `/tags/{tag-name}`
- Underneath the listing of all tags, we should list out each tag and then a list of each post for that tag

### `tags/single.html`

- Should list all blog posts in that tag

#### Comments Structure

```yml
id: 635428042550000000
date: 2014-08-05T02:57:35.0000000Z
name: Joe Coder
avatar: http://www.gravatar.com/avatar/314826f5d569260f26ac9f26f9e38b8a.jpg?d=robohash
message: I concur.
```

### `page.html`

- Used as a general template for pages
- Should be similar to `post.html` but without any comments/paging