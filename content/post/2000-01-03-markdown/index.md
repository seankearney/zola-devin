+++
title = "Markdown Sample"
date = 2000-01-03
description = "Let's test Markdown"

[taxonomies]
tags = ["code"]
+++

# Markdown Syntax Test

## Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Paragraphs
This is a paragraph with *emphasis* and **strong emphasis**.

## Blockquotes
> This is a blockquote.

## Lists

### Unordered List
- Item 1
  - Subitem 1.1
  - Subitem 1.2
- Item 2

### Ordered List
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2

## Code
### Inline Code
Here is some `inline code`.

### Code Blocks
#### JavaScript
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('World'));
```

#### C#
```c#
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

## Horizontal Rule
---

## Links
[CommonMark](https://commonmark.org)

## Images
![Markdown Logo](https://commonmark.org/help/images/favicon.png)

## Tables
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Task Lists
- [x] Task 1
- [ ] Task 2

## Footnotes
This is a sentence with a footnote.[^1]

[^1]: This is the footnote.

## Strikethrough
~~This text is struck through.~~
