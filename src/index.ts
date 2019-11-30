import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for tailwind_theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'tailwind_theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = 'tailwind_theme/index.css';

    manager.register({
      name: 'tailwind_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
