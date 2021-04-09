import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-tailwind-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-tailwind-theme:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-tailwind-theme is activated!');
  }
};

export default extension;
