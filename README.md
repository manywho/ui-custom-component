A small `webpack` based boilerplate for creating custom Boomi Flow UI components.

## Setup

- Download or clone this repo
- `npm install`

## Included Components

This boilerplate includes examples components for:

- Basic rendering `basic.tsx`
- Input `input.tsx`

## Writing a Custom Component

Create the custom component in a new `.tsx` file, then re-export them in `index.tsx` e.g. `export * from './component';`. Any custom styles can be added in a separate `.css` file which is imported into the `.tsx` file.

## Testing

You can start the local development server with `npm run dev`. This will serve the compiled javascript and css at `http://localhost:8080/custom-component.js` and `http://localhost:8080/custom-component.css`.

The easiest way to test a custom component would be to create a custom player then add references to the `custom-components.js` and `custom-components.css` as custom resources, more information on loading custom resources can be found here: https://docs.manywho.com/adding-custom-javascript-and-stylesheets/

The local development server won't be accessible from `flow.manywho.com`, you can workaround this by using a tunnel like https://ngrok.com/download

Run ngrok with: 

```
ngrok http 8080 -host-header="localhost:8080"
```

If that fails then try:

```
ngrok http --host-header=rewrite 8080
```

ngrok will provide a url like `https://ad7c2b13.ngrok.io` that will point to `http://localhost:8080`, for example you would add the following as custom resources in a player:

```
https://ad7c2b13.ngrok.io/custom-components.js,
https://ad7c2b13.ngrok.io/custom-components.css
```

After making changes to your custom component you can refresh the browser running the flow for the changes to be picked up.

## Deploying

Run the `npm run build` command to create a production build of `custom-components.js` and `custom-components.css`. You can then host these two files either by using the built in Assets support (more information can be found here: https://docs.manywho.com/everything-you-want-to-know-about-assets/) or a 3rd party file hosting environment.

After the `.js` and `.css` files are available from a file host you can reference them in a custom player as custom resources.

## Configuration

You can change the generated filenames from `custom-components.js` and `custom-components.css` by editing the `webpack.config.js` file:

- line 6 for `custom-components.js`
- line 36 for `custom-components.css`
