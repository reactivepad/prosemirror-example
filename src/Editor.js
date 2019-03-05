import React, { Component } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import { addListNodes } from "prosemirror-schema-list";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup, buildMenuItems } from "prosemirror-example-setup";

const {
  buildPlugin,
  nodes,
  menuItems,
  buildMenuDropdown
} = window.ReactivepadProseMirror;

const editorSchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block").append(
    nodes
  ),
  marks: schema.spec.marks
});

class Editor extends Component {
  componentDidMount() {
    const reactivepadPlugin = buildPlugin();

    const menu = buildMenuItems(editorSchema);
    menu.fullMenu.unshift([buildMenuDropdown(menuItems)]);

    this.editorView = new EditorView(this.editorRef, {
      state: EditorState.create({
        schema: editorSchema,
        plugins: [
          ...exampleSetup({
            schema: editorSchema,
            menuContent: menu.fullMenu
          }),
          reactivepadPlugin.plugin
        ]
      }),
      attributes: {
        spellcheck: "false"
      }
    });
  }

  componentWillUnmount() {
    this.editorView.destroy();
  }

  handleEditorRef = el => {
    this.editorRef = el;
  };

  render() {
    const { style, className } = this.props;

    return (
      <div style={style} className={className} ref={this.handleEditorRef} />
    );
  }
}

export default Editor;
