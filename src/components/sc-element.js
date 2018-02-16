
let HTMLElement;
if (typeof process !== 'undefined') {
  HTMLElement = class HTMLElement {};
}

export class SCElement extends HTMLElement {}
