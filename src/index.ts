import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for jupyterlab-tailwind-theme
 * Since the JupyterLab theme extension seem to only allow for one index.css file, there is a set of variables
 * defined in index.css which is overridden here depending of the choice of theme.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-tailwind-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = 'jupyterlab-tailwind-theme/index.css';

    manager.register({
      name: 'Tailwind Light',
      isLight: true,
      load: () => {
        document.documentElement.style.setProperty('--tailwind-background-color', 'var(--tailwind-grey-100)');

        document.documentElement.style.setProperty('--tailwind-layout-color0', 'rgb(var(--tailwind-white))');
        document.documentElement.style.setProperty('--tailwind-layout-color1', 'rgb(var(--tailwind-white))');
        document.documentElement.style.setProperty('--tailwind-layout-color2', 'var(--tailwind-grey-300)');
        document.documentElement.style.setProperty('--tailwind-layout-color3', 'var(--tailwind-indigo-600)');
        document.documentElement.style.setProperty('--tailwind-layout-color4', 'var(--tailwind-grey-600)');

        document.documentElement.style.setProperty('--tailwind-inverse-layout-color3', 'var(--tailwind-indigo-800)');

        document.documentElement.style.setProperty('--tailwind-code-cell-color', 'var(--md-grey-100)');
        document.documentElement.style.setProperty('--tailwind-base-font-color', 'var(--tailwind-black)');
        document.documentElement.style.setProperty('--tailwind-inverse-font-color', 'var(--tailwind-white)');

        document.documentElement.style.setProperty('--tailwind-menu-color', 'var(--tailwind-indigo-800)');

        return manager.loadCSS(style)
       },
       unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Tailwind Dark',
      isLight: false,
      load: () =>  {
        document.documentElement.style.setProperty('--tailwind-background-color', 'rgb(var(--tailwind-black))');

        document.documentElement.style.setProperty('--tailwind-layout-color0', 'var(--tailwind-grey-800)');
        document.documentElement.style.setProperty('--tailwind-layout-color1', 'var(--tailwind-grey-800)');
        document.documentElement.style.setProperty('--tailwind-layout-color2', 'var(--tailwind-grey-900)');
        document.documentElement.style.setProperty('--tailwind-layout-color3', 'var(--tailwind-indigo-300)');
        document.documentElement.style.setProperty('--tailwind-layout-color4', 'var(--tailwind-grey-800)');

        document.documentElement.style.setProperty('--tailwind-inverse-layout-color3', 'var(--tailwind-indigo-600)');

        document.documentElement.style.setProperty('--tailwind-code-cell-color', 'var(--tailwind-grey-700)');
        document.documentElement.style.setProperty('--tailwind-base-font-color', 'var(--tailwind-white)');
        document.documentElement.style.setProperty('--tailwind-inverse-font-color', 'var(--tailwind-black)');

        document.documentElement.style.setProperty('--tailwind-menu-color', 'var(--tailwind-indigo-800)');

        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });


  },
  autoStart: true
};

export default plugin;
