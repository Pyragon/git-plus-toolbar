'use babel';

import GitPlusToolbarView from './git-plus-toolbar-view';
import {
  CompositeDisposable
} from 'atom';

class GitPlusToolbar {
  activate () {
    this.subscriptions = new CompositeDisposable();
    if (!atom.packages.loadedPackages['tool-bar'] || !atom.packages.loadedPackages['git-plus']) {
      require('atom-package-deps').install('git-plus-toolbar').then(function () {

      }).catch(function (error) {
        if (error) { atom.notifications.addError(error.stack); }
      });
    }
  }

  consumeToolBar (getToolbar) {
    this.subscriptions.add(new GitPlusToolbarView(getToolbar));
  }

  deactivate () {
    this.subscriptions.dispose();
  }
}

const toolbar = new GitPlusToolbar();
export default toolbar;
