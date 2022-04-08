import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'first-button',
  styleUrl: 'first-button.css',
  shadow: true,
})
export class FirstButton {
  @Listen('click')
  handleClick(event) {
    console.log(event)
  }

  render() {
    return (
      <Host>
        <button><slot></slot></button>
      </Host>
    );
  }

}
