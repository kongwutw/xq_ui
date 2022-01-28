import { App } from "vue";

import XqSwitch from "./switch/index.vue";
import XqButton from "./button/index.vue";
import XqDialog from "./dialog/index.vue";
import XqAvatar from "./avatar/index.vue";
import { openDialog } from "./dialog/openDialog";

export {
  XqSwitch,
  XqButton,
  XqDialog,
  XqAvatar,
  openDialog,
};

const components = [
  XqButton,
  XqSwitch,
  XqDialog,
  XqAvatar,
];

export function registerXqUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerXqUi;
