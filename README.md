# Zola Devin Theme

A modern, responsive theme for Zola static site generator featuring Tailwind CSS, dark mode support, and vanilla JavaScript. Perfect for blogs and personal websites. 

Demo Site: [https://seankearney.github.io/zola-devin/](https://seankearney.github.io/zola-devin/)

## Features

- 🎨 Modern design with Tailwind CSS
- 🌓 Dark mode support with smooth transitions
- 🔍 Built-in search functionality
- 📱 Fully responsive layout
- 💬 Comment system support
- 🏷️ Tag and category support
- 📄 Pagination for blog posts
- 📊 Archive page with post grouping
- 🔗 Social media integration
- 📰 RSS feed support

## Installation

1. Create a new Zola site:
```bash
zola init mysite
cd mysite
```

2. Clone this repository into your themes directory:
```bash
git clone https://github.com/seankearney/zola-devin.git themes/zola-devin
```

3. Enable the theme in your `config.toml`:
```toml
theme = "zola-devin"
```

## Upgrading

If you installed the theme using `git clone` (recommended), pull the latest changes:

```bash
cd themes/zola-devin
git pull origin main
cd ../..
```

If you installed the theme as a git submodule:

```bash
git submodule update --remote themes/zola-devin
```

After upgrading, rebuild your site with `zola build` to pick up the changes.

## Configuration

### Required Configuration

Update your `config.toml` with these settings:

```toml
base_url = "/"
title = "Your Site Title"
description = "Your site description"
default_language = "en"

# Whether to build a search index
build_search_index = true

# Feed configuration
generate_feeds = true
feed_filenames = ["rss.xml"]

# The taxonomies to be rendered for the site
taxonomies = [
    {name = "tags"},
]

# Theme-specific settings
theme = "zola-devin"

[search]
search_index_format = "elasticlunr_javascript"

[markdown.highlighting]
theme = "nord"

[extra]
# Blog owner information
blog_owner_name = "Your Name"
blog_owner_description = "A short bio about yourself"
blog_owner_image = "/images/avatar.jpg"  # Place your avatar in the static/images directory

# Social media links
social_links = [
    { name = "GitHub", url = "https://github.com/username" },
    { name = "Twitter", url = "https://twitter.com/username" },
    { name = "LinkedIn", url = "https://linkedin.com/in/username" },
    { name = "StackOverflow", url = "https://stackoverflow.com/users/username" }
]

# Google Analytics / GTag id - Place your tag id here to enable Google Analytics
google_analytics_gtag_id = "{your-tag-here-id}"

```

### Enabling Comments

Comments are supported through YAML files co-located with blog posts. To enable comments:

1. Create a comment file in your post directory:
```yaml
# content/post/my-post/comment-0001.yml
id: "0001"
date: "2024-01-01T00:00:00.0000000Z"
name: "John Doe"
avatar: "https://robohash.org/0001.png"
message: "Great post! Thanks for sharing."
```

2. Comments are automatically displayed at the bottom of blog posts when comment files are present.

## Content Structure

```
content/
├── _index.md                 # Homepage content
├── about.md                  # About page
├── archive.md                # Archive page
└── post/                     # Blog posts directory
    ├── _index.md             # Blog listing page
    └── post-name/            # Individual post directory
        ├── index.md          # Post content
        ├── promo-image.png   # Optional promotional image
        └── comment-0001.yml  # Optional comments
```

### Post Front Matter

Use this front matter in your post's `index.md`:

```yaml
+++
title = "My Post Title"
date = 2024-01-01
description = "A brief description of the post"

[extra]
promo_image = "promo-image.png" # An optional path, of a colocated image, to show on the homepage

[taxonomies]
tags = ["tag1", "tag2"]
+++
```

## Building and Deployment

1. Install dependencies and build assets:
```bash
# Install dependencies
npm install

# Build Tailwind CSS (in watch mode for development)
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css --watch

# Or build once for production
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css
```

2. Build and serve your site:
```bash
# Build for production
zola build

# Preview locally (available at http://127.0.0.1:1111)
zola serve
```

## Customization

### Tailwind CSS

The theme uses Tailwind CSS for styling. Customize the design by modifying:

- `static/input.css` - Base styles and components
- `tailwind.config.js` - Theme configuration and extensions

### Templates

Override any template by creating a matching file in your site's `templates` directory:

- `templates/base.html` - Main layout
- `templates/index.html` - Homepage
- `templates/post.html` - Blog post
- `templates/post-list.html` - Blog listing
- `templates/page.html` - Regular pages
- `templates/archive.html` - Archive page

## License

This theme is released under the MIT License. See the LICENSE file for details.
