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

## Installation

```javascript
import Vue from 'vue';
import VueWindow from '@netsells/vue-window';

import store from './store';

Vue.use(VueWindow, { store });
```

### NuxtJS installation

Plugin:

```javascript
import Vue from 'vue';
import { mixin } from '@netsells/vue-window';

Vue.mixin(mixin);
```

Store:

```javascript
import { store as vueWindowStore } from '@netsells/vue-window';

export const modules = {
    window: vueWindowStore,
};
```

## Usage

```javascript
this.$window.innerWidth
```
