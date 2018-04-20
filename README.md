# GrapesJS plugin modal

## Options

|Option|Description|Default|
|-|-|-
|`category`|`Category name`|`Advanced`|
|`modalStyle`|`CSS rules for modal`|`The bootstrap css to modal only. (https://getbootstrap.com/docs/3.3/customize/)`|
|`modalHtml`|`The initial HTML form the modal`|`A basic bootstrap modal`|
|`modalJquery`|`URL to Jquery`|`https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js`|
|`modalBootstrap`|`URL to Jquery`|`https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js`|

## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-plugin-modal.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['gjs-modal'],
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/omarmd1986/grapesjs-plugin-modal.git
$ cd grapesjs-plugin-modal
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
