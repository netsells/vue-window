# DO NOT USE THIS LIBRARY

You should _always_ be using CSS and media queries to create responsive web
pages. Using JavaScript to make a page responsive can result in **SEO and server
side rendering issues**. Too much use will **prevent SSR** ruining any load time
decrease, and may even be a detriment as the page will have to re-render after
each load. If you are unsure of the risks, speak to your lead dev. **If you know
the risks and can work around them, read on.**

## Vue Window

Adds a global computed `$window` responsive property which updates with the real
window property.
