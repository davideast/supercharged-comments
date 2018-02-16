
let _HTMLElement;
if (typeof process !== 'undefined') {
  _HTMLElement = class HTMLElement {};
} else {
  _HTMLElement = HTMLElement;
}

export class SCElement extends _HTMLElement {}
