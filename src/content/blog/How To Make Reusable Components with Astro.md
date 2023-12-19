---
title: "How To Make Reusable Components with Astro"
description: Learn how to make robust reusable components in Astro.
published: 2023-12-19
image:
  {
    src: "./images/how-to-make-reusable-components-with-astro/astro-component.png",
    alt: "Astro logo and a cube with a cog icon, paint bucket icon, and an icon for alignment on the sides of the cube.",
  }
---

**Heads up!** I will add in Typescript along the way, because it’s nice to have the auto-complete features for reusable components. The code will work without the Typescript though.

## Table of content

- [The Foundation](#the-foundation)
- [Slots](#slots)
- [Styling](#styling)
- [Tailwind](#using-tailwind)
- [Wrapping Up](#wrapping-up)

## The Foundation

To make a component in Astro, start by creating a new file - _Button.astro_.
This button will be an anchor tag used for navigation.

```astro
<a href="/about">About Me</a>
```

Now you can import this component in you _index.astro_ page.

```astro
---
import Button from "../components/Button.astro";
---

<html>
  <h1>Welcome to my website!</h1>
  <Button />
</html>
```

## Slots

This button is not very reusable right, so let’s make it possible to customize the link text. One way to do that is by using slots. A [`<slot />`](https://docs.astro.build/en/core-concepts/astro-components/#slots) is a placeholder for the components children, which can be plain text, a single element, several elements or nested elements.

```astro
<a href="/about">
  <slot />
</a>
```

Now let's make the `href` a passable prop:

```astro
---
const { href } = Astro.props;
---

<a href={href}>
  <slot />
</a>
```

Meanwhile, we must remember to add the `href` on our homepage.

```astro
---
import Button from "../components/Button.astro";
---

<html>
  <h1>Welcome to my website!</h1>
  <Button href="/about">About Me</Button>
</html>
```

## Inferred Attributes

Now the component looks and feels just like an anchor tag. The only problem is, that HTML elements have many different attributes, and it would be time consuming to manually type them all.

Instead we can import the attributes with Typescript, and extend the expected props with the standard attributes for a given HTML element. Note, that interface `Props` is implicitly set as the type interface for `Astro.props`.

Now we can delete the `href` from our props, and spread all our remaining props as the attributes for our anchor tag.
This way, we will have access to `href`, `target`, `rel`, and all the other attrubitutes, and auto-completion as if it was an anchor tag.

```astro
---
import type { HTMLAttributes } from "astro/types";

interface Props extends HTMLAttributes<"a"> {}
const { ...props } = Astro.props;
---

<a {...props}>
  <slot />
</a>
```

## Styling

Now it's time to add some basic styles to our button. In Astro you can scope your CSS styles with a `style` tag at the bottom.

Here I have added a "button" class which will be added to all instances of the components, but I have also added a "red" class and a "blue" class. These classes are not assigned by default, but will be available, if they are set in the `class` prop, as I'm using `Astro.props.class` in the [`class:list`](https://docs.astro.build/en/guides/styling/#combining-classes-with-classlist).

```astro
---
import type { HTMLAttributes } from "astro/types";

interface Props extends HTMLAttributes<"a"> {}
const { ...props } = Astro.props;
---

<a class:list={["button", Astro.props.class]} {...props}>
  <slot />
</a>

<style>
  .button {
    padding: 1rem;
    border: 2px solid black;
  }

  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
```

Now we can customize our component by adding CSS classes defined in the component.

```astro
---
import Button from "../components/Button.astro";
---

<html>
  <h1>Welcome to my website!</h1>
  <Button href="/">Home</Button>
  <Button href="/about" class="red">About Me</Button>
  <Button href="/services" class="blue">Services</Button>
</html>
```

While having these instances styled based on CSS classes are great for minor style changes, but for more varied styles, it's easier to make variants, then make minor adjustments with classes.

I have made two variants: "primary" and "secondary", and `variant` as a prop. With these presets, we can assign complex styling as the base styling, and still be able to make minor changes with other classes.

```astro
---
import type { HTMLAttributes } from "astro/types";

interface Props extends HTMLAttributes<"a"> {
  variant: "primary" | "secondary";
}

const { variant, ...props } = Astro.props;
---

<a
  class:list={[
    "button",
    { primary: variant === "primary" },
    { secondary: variant === "secondary" },
    Astro.props.class,
  ]}
  {...props}
>
  <slot />
</a>

<style>
  .button {
    padding: 1rem;
    border: 2px solid black;
  }

  .primary {
    background-color: black;
    color: white;
    border-radius: 50%;
  }

  .secondary {
    color: black;
    padding: 2rem;
  }

  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
```

The _index.astro_ could look something like this:

```astro
---
import Button from "../components/Button.astro";
---

<html>
  <h1>Welcome to my website!</h1>
  <Button href="/" variant="primary">Home</Button>
  <Button href="/about" variant="secondary">About Me</Button>
  <Button href="/services" variant="secondary" class="blue">Services</Button>
</html>
```

### Using Tailwind?

If you use Tailwind you might run into issues with merging classes set on the component, and classes passed down with props. I recommend using [tailwind-merge](https://github.com/dcastil/tailwind-merge).

Using this Tailwind, you wouldn't need the "red" and "blue" classes, as minor changes would be just as easy to add on _index.astro_.

_Button.astro_:

```astro
---
import type { HTMLAttributes } from "astro/types";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<"a"> {
  variant: "primary" | "secondary";
}

const { variant, ...props } = Astro.props;
---

<a
  class={twMerge(
    "p-4 border-2 border-solid border-black",
    variant === "primary" && "bg-black text-white rounded-full",
    variant === "secondary" && "text-black p-8",
    Astro.props.class,
  )}
  {...props}
>
  <slot />
</a>
```

_index.astro_:

```astro
---
import Button from "../components/Button.astro";
---

<html>
  <h1>Welcome to my website!</h1>
  <Button href="/" variant="primary">Home</Button>
  <Button href="/about" variant="secondary">About Me</Button>
  <Button href="/services" variant="secondary" class="text-blue-500">
    Services
  </Button>
</html>
```

## Wrapping Up

There are many ways to make good components in Astro, and it's certainly a great way to make a project scale better and more readable when you need to maintain it in 6 months. It's fine to have one-off components, but having good reusable components to begin with, really makes it a lot easier to work with regardless of scale.
