This project is a demo of ProseMirror plugin combined with [Reactivepad](https://reactivepad.com) plugin. CodeSandbox: [https://codesandbox.io/s/34oyly2xl5](https://codesandbox.io/s/34oyly2xl5)

It's basically a modified version of a basic ProseMirror example setup from official documentation https://prosemirror.net/examples/basic.

To setup plugin:
```javascript
const {
  buildPlugin,
  nodes,
  menuItems,
  buildMenuDropdown
} = window.ReactivepadProseMirror;


// create a plugin
const reactivepadPlugin = buildPlugin();

// extend default editor schema with nodes from Reactivepad
const editorSchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block").append(
    nodes
  ),
  marks: schema.spec.marks
});

// add Reactivepad's dropdown to menubar
const menu = buildMenuItems(editorSchema);
menu.fullMenu.unshift([buildMenuDropdown(menuItems)]);

// create ProseMirror editor instance with Reactivepad plugin
new EditorView(this.editorRef, {
    state: EditorState.create({
      schema: editorSchema,
      plugins: [
        ...exampleSetup({
	          schema: editorSchema,
	          menuContent: menu.fullMenu
		  }),
       reactivepadPlugin.plugin
	  ]
    })
  });
}
```

Please refer to `src/Editor.js` file for more context.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
