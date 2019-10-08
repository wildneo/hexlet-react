import $ from 'jquery';
import React from 'react';
import 'bootstrap-markdown/js/bootstrap-markdown';

window.jQuery = $;

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $(this.textareaRef.current).markdown({
      iconlibrary: 'fa',
      onChange: this.handleChange,
    });
  }

  handleChange(event) {
    const { onContentChange } = this.props;
    const content = event.getContent();
    onContentChange(content);
  }

  render() {
    return (
      <div ref={this.textareaRef} data-provide="markdown" />
    );
  }
}
