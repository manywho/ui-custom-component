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

## Debugging

You can start the local development server with `npm start`. This will serve the compiled javascript and css at `http://localhost:8080/custom-component.js` and `http://localhost:8080/custom-component.css`.

The easiest way to test a custom component would be to create a custom player then add references to the `custom-components.js` and `custom-components.css` as custom resources, more information on loading custom resources can be found here: https://docs.manywho.com/adding-custom-javascript-and-stylesheets/

By default, the local development server will be made accessible to the internet via [ngrok](https://ngrok.com/)

ngrok will provide a url like `https://ad7c2b13.ngrok.io` that will point to `http://localhost:8080`, for example you would add the following as custom resources in a player:

```
customResources: ['https://ad7c2b13.ngrok.io/custom-component.js', 'https://ad7c2b13.ngrok.io/custom-component.css']
```

The ngrok url will be dislpayed in the console (just before the webpack output statistics)

After making changes to your custom component you can refresh the browser running the flow for the changes to be picked up.

## Testing

This boilerplate supports unit testing using [jest](https://jestjs.io) and integration testing using [testcafe](https://devexpress.github.io/testcafe/).

### Unit Tests

Any typescript file in the `src/__tests__/unit` folder will be run by jest, some examples for the basic and input example components can be found in there. You
can start the jest watcher by running `npm run test-unit`

### Integration Tests

Any typescript file in the `src/__tests__/integration` folder will be run by testcafe, some examples for the basic and input example components can be found in there. You
can start the testcafe watcher by running `npm run test-integration`

By default integration tests will run in Google Chrome, you can change this by editing the following line in `package.json`:

```
"test-integration": "testcafe-live chrome ./src/__tests__/integration"
```

Documentation on supported browsers can be found here: http://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#browser-list

## Deploying

Run the `npm run build` command to create a production build of `custom-components.js` and `custom-components.css`. These can
be uploaded to your tenants assets by running `npm run upload`, they can then be referenced in a custom player as custom
resources.

The bulit `.js` and `.css` files can be hosted anywhere that `flow.manywho.com` can access them. Uploading to your tenants
assets is a quick and easy way to get started.

> Tenant assets are publically accessible and should not contain any secrets of confidential information!

## Configuration

You can change the generated filenames from `custom-components.js` and `custom-components.css` by editing the `webpack.config.js` file:

- line 10 for `custom-components.js`
- line 55 for `custom-components.css`
