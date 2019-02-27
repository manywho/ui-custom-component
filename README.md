A small `webpack` based boilerplate for creating custom Boomi Flow UI components.

## Setup

- Download or clone this repo
- `npm install`

### Updating

You can keep this copy upto date with the latest interfaces and build configurations by running the `npm run update` command.

Custom webpack configurations can be maintained by running `npm run update -- -exclude-webpack`.

## Included Components

This boilerplate includes examples components for:

- Basic rendering `basic.tsx`
- Input `input.tsx`

### Writing a Custom Component

Create the custom component in a new `.tsx` file, then re-export them in `index.tsx` e.g. `export * from './component';`. Any custom styles can be added in a separate `.css` file which is imported into the `.tsx` file.

#### Higher-Order Components

This boillerplate includes 2 higher-order components, in `wrapper.tsx`, `container` and `component` that you can wrap your custom components with (see `input.tsx` for an example). These higher-order
components will do some work fetching model, state, outcomes, etc for you which will then be passed down as `props` into your custom component.

##### Component 

When registering your custom component with the UI framework wrap it in the Component higher-order component

```javascript
manywho.component.register('custom-input', component(CustomInput));

// Optionally set the debug mode to enabled, when running the flow in debug mode (`mode=DEBUG` in the query string)
// links to to view the components model & state are rendered
manywho.component.register('custom-input', component(CustomInput, true));
```

The `props` passed into a wrapped component will be of type [IComponentProps](https://github.com/manywho/ui-custom-component/blob/7424f50eaa8054b1ba6659d8d1d2ae2d1c8a23fe/src/interfaces/index.ts#L301)

The higher-order component will do a lot of heavy lifting for you such as

* Getting the model and local state
* Setup debug rendering and debug logging
* Provide helpers for propagating changes and events
* Provide helpers for getting the current content value and objectdata

**ObjectData**

Calling `props.getObjectData` will return an array of ObjectData objects for the component. Each ObjectData object will be modified so you can access the properties by name.

For example without using the Component higher-order component you would get the content value of an objectdata property by:

```javascript
manywho.utils.getObjectDataProperty(objectData[0].properties, 'PropertyName').contentValue;
```

After using `props.getObjectData`:

```javascript
objectData[0].PropertyName;
```

Properties can also be set

```javascript
objectData[0].PropertyName = 'New Value';
```

##### Container

Container type components can also be wrapped in a higher-order component when be registered as well:

```javascript
manywho.component.registerContainer('custom-container', container(CustomContainer));
```

## Debugging

### VSCode

This boilerplate includes built in configuration support for debugging in [VSCode](https://code.visualstudio.com/) and is the recommended way to debug.

Select the `Debug` configuration then hit **Start Debugging**. This will start up the configured webpack-dev-server then open an instance of Chrome pointing to the included player (built from `template.html`). You can then setup breakpoints in VSCode in your custom component code.

The tenant, flow and flow version that used in the built-in player can be configured by editing the `flow` section of `package.json`.

### Without VSCode

You can start the local development server with `npm start`. This will serve the compiled javascript and css at `http://localhost:8080/custom-component.js` and `http://localhost:8080/custom-component.css`.

The easiest way to test a custom component would be to create a custom player then add references to the `custom-components.js` and `custom-components.css` as custom resources, more information on loading custom resources can be found here: https://docs.manywho.com/adding-custom-javascript-and-stylesheets/

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

You can change the generated filenames from `custom-components.js` and `custom-components.css` by editing the `flow.filenames` section of then `package.json` file.

Run the `npm run build` command to create a production build of `custom-components.js` and `custom-components.css`. These can
be uploaded to your tenants assets by running `npm run upload`, they can then be referenced in a custom player as custom
resources.

The bulit `.js` and `.css` files can be hosted anywhere that `flow.manywho.com` can access them. Uploading to your tenants
assets is a quick and easy way to get started.

> Tenant assets are publically accessible and should not contain any secrets of confidential information!
