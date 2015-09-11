# jQuery.brokenImages.js

Take control of the broken images incurred by your web app.

### Features

* Remove broken images from DOM
* Replace broken image with a placeholder image
* Replace broken image with an element and string (e.g.user initials)
* Run a custom function if further DOM manipulation is needed (e.g. modifying layout)

### Usage

1. Include jQuery:

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    ```

2. Include plugin's code:

    ```html
    <script src="jquery.boilerplate.js"></script>
    ```

3. Call the plugin:

    ```html
    <img id="element" src="" onerror="$(this).brokenImages(options)"/>
    ```
  
### Usage Notes
  
This plugin is only meant to be used when an <img> tag in the DOM generates an error.

### Options

#### remove

    remove: false  

Simply remove the element from the DOM

#### replaceString

    replaceString: ''

Text for the new element that replaces the broken image (e.g. initials). replaceString
works in tandem with the `replaceClass` option.

#### replaceClass

    replaceClass: 'initials'

The CSS class for the new element which replaced the image. The resulting structure is simple:
    
    <div class="{{replaceClass}}">
      <span>{{replaceString}}</span>
    </div>
 
#### replacementImage

    replacementImage: ''

Replace the broken image with another. Whatever you put here will replace the src attribute
of the original <img> tag.

#### customFunction

    customFunction: null

A function to run when other work is complete. The context is ALWAYS the original image element.
Make sure the function is available in the global context. I know it's ugly but I couldn't find
a simple way around it. Solutions are appreciated.

    ```html
    <img id="element" src="" onerror="$(this).brokenImages({ customFunction: changeLayout })"/>
    ```

**Note**: Without an options object running the plugin will result in no-op

### Why does this exist?

It turns out <img> tags are pretty fickle when they generate errors. A lot depends on
when your template is rendered into the DOM and even then catching errors was hit or miss
in my experience. Browsers also render the results of broken images differently. Fickleness 
aside we wanted wholesale of control of broken images and this plugin is the result.

### License

The MIT License