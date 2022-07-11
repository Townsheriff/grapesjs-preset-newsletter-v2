# [GrapesJS Newsletter Preset](http://grapesjs.com/demo-newsletter-editor.html)

This preset configures GrapesJS to be used as a Newsletter Builder with some unique features and blocks composed specifically for being rendered correctly inside all major email clients.

Demo: http://grapesjs.com/demo-newsletter-editor.html

<p align="center"><img src="http://grapesjs.com/img/grapesjs-preset-newsletter.jpg" alt="GrapesJS" width="500" align="center"/></p>
<br/>

## Summary

- Commands
  - `gjs-get-inlined-html` Get html with inlined CSS
  - `gjs-open-import-template` Opens a modal for the import
  - `gjs-toggle-images` Enable/Disable images
- Blocks
  - `sect100` A section with 1 100% cell inside
  - `sect50` A section with 2 50% cells inside
  - `sect30` A section with 3 33.3333% cells inside
  - `sect37` A section with 2 cells inside: 30% and 70%
  - `button` Simple button
  - `divider` Divider block
  - `text` Simple text component
  - `text-sect` A block with 2 text components, respectively for the heading and paragraph
  - `image` Simple image component
  - `quote` Text component for quotes
  - `grid-items` Block of 2 components in row
  - `list-items` List of 2 components
- Plugin
  - Name: `gjs-preset-newsletter`
  - Options:
    - `modalTitleImport` Title for the import modal, default: 'Import template'
    - `modalLabelImport` Label for the import modal, default: ''
    - `modalLabelExport` Label for the export modal, default: ''
    - `modalBtnImport` Label for the import button, default: 'Import'
    - `importPlaceholder` Template as a placeholder inside import modal, default: ''
    - `inlineCss` If `true`, inlines CSS on export, default: `true`
    - `cellStyle` Default style used inside blocks `td`s, default:
      `{ padding: 0, margin: 0, 'vertical-align': 'top' }`
    - `tableStyle` Default style used for blocks tables, default:
      `{ height: '150px', margin: '0 auto 10px auto', padding: '5px 5px 5px 5px', width: '100%' }`

## Usage

```sh
$ npm i grapesjs-preset-newsletter-v2
```

```javascript
import grapesjs from "grapesjs";
import newsLetter from "grapesjs-preset-newsletter-v2";

grapesjs.plugins.add("gjs-preset-newsletter", newsLetter);

const editor = grapesjs.init({
  container: "#editor",
  plugins: ["gjs-preset-newsletter"],
  pluginsOpts: {
    "gjs-preset-newsletter": {
      inlineCss: false,
    },
  },
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-preset-newsletter-v2.git
$ cd grapesjs-preset-newsletter-v2
$ npm i
$ npm link
$ npm run dev
```

In main project:
```sh
$ npm link grapesjs-preset-newsletter-v2
```


## License

BSD 3-Clause
