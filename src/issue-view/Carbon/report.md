# Carbon Design System

- it requires global stiling and insists to use scss (at least with react)
- some strange styling solutions... or too easy ways to make missmatch styling... (eg. when I took default examples of button, file-loader and drop-down-meny, with their default div-css wrappers they was mossmatched by height and margins)

## Instalation

## Documentation

+ Documentation is really good
    + it is really detailed and accurate;

- the documentation contains pretty much of video guides without text dublication (and without x2 speed);

## How to/examples

## Accessibility

+++ there is a lot of docs, guides and tools to support a11y by W3C and WCAG recomendations ([here talks about](https://www.carbondesignsystem.com/guidelines/accessibility/overview/#carbon-and-accessibility) AA+ level). And it looks like it is really possible here.

- a lot of this work should be done manually (but it still possible / not broke by lib restrictions)

## Theme

+ there are prety flexible and deep optionse to customize themes

- there are really hard (in amount of small actions) to patch components styling. I don't find the way to change component style in one function/mixin/etc.

## Components

### Button

+ presents

- icons can be placed only on right side


### FileUploader

- as a button don't support icons

## Typography

+- Provided only css styles.
-!!! there are no auto-gaps and any auto-grid.

- There are some lib for provide styled-components aproach

### Layout

Used css FLEX layout for creating grid. It is pretty flexible. Used "adaptive design" pattern.