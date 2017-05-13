'use babel';

import { Disposable } from 'atom';

export default class GitPlusToolbarView extends Disposable {
  constructor (getToolbar) {
    super();
    this.toolbar = getToolbar('git-plus-toolbar');
    this.displayToolbar();
  }

  displayToolbar () {
    var toolbar = this.toolbar;

    toolbar.addButton({
      icon: 'document-text',
      callback: 'application:new-file',
      tooltip: 'New File',
      iconset: 'ion'
    });

    toolbar.addButton({
      icon: 'folder',
      callback: 'application:add-project-folder',
      tooltip: 'Add Project Folder',
      iconset: 'ion'
    });

    toolbar.addSpacer();

    toolbar.addButton({
      tooltip: 'Init',
      callback: 'git-plus:init',
      iconset: '',
      icon: 'repo'
    });

    toolbar.addButton({
      callback: 'git-plus:new-branch',
      tooltip: 'Create new branch',
      iconset: '',
      icon: 'git-branch'
    });

    toolbar.addButton({
      callback: 'git-plus:checkout',
      tooltip: 'Checkout branch',
      iconset: '',
      icon: 'search'
    });

    toolbar.addButton({
      callback: 'git-plus:add',
      tooltip: 'Add file',
      iconset: 'fi',
      icon: 'page-add'
    });

    toolbar.addButton({
      callback: 'git-plus:add-all',
      tooltip: 'Add all files',
      iconset: 'fi',
      icon: 'folder-add'
    });

    toolbar.addButton({
      callback: 'git-plus:commit',
      tooltip: 'Commit',
      iconset: '',
      icon: 'git-commit'
    });

    toolbar.addButton({
      tooltip: 'Compare',
      iconset: '',
      icon: 'git-compare',
      callback: 'git-plus:diff'
    });

    /* var html = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
<g><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4241.8,4853.4c-245-310.1-245-310.1-84.2-463.3c467.1-448,691.1-953.4,693-1562.2c0-382.9-70.8-683.5-243.1-1026.1c-105.3-210.6-201-338.9-547.5-719.8c-534.1-591.6-804.1-963-1039.5-1430.1c-145.5-289.1-291-694.9-344.6-972.5l-34.5-166.6l-59.4,24.9c-32.5,15.3-141.7,65.1-241.2,112.9c-281.4,135.9-444.2,172.3-689.2,160.8c-247-11.5-388.6-57.4-585.8-189.5C661.8-1648,424.4-2130.5,424.4-2687.6c0-426.9,114.9-806,358-1175.5c114.9-176.1,358-425,522.6-536c247-164.6,582-292.9,938.1-354.2c618.4-109.1,1250.1,118.7,1753.6,629.9c225.9,229.7,350.3,425,442.2,694.9c264.2,771.5-49.8,1525.8-719.8,1736.4c-130.2,42.1-589.6,107.2-746.6,107.2c-36.4,0-38.3,7.7-26.8,72.7c51.7,298.7,176.1,683.5,314,970.6c231.7,478.6,495.8,832.8,1165.9,1560.3c260.4,283.3,482.4,553.3,572.4,694.9l57.4,91.9l151.2-114.9c714.1-538,1328.6-1495.2,1657.9-2586.4c80.4-266.1,172.3-666.2,158.9-698.8c-5.7-15.3-101.4-30.6-271.8-45.9c-461.4-42.1-677.7-122.5-907.5-338.8c-147.4-139.8-250.8-304.4-319.7-515c-45.9-137.8-51.7-181.9-49.8-430.8c0-245,5.7-296.7,49.8-446.1c187.6-612.6,706.4-1125.7,1363.1-1349.7c147.4-49.8,166.6-51.7,574.3-51.7l421.2,1.9l201,63.2c386.7,120.6,601.2,243.1,855.8,486.3c317.8,304.4,547.5,744.7,618.3,1187c34.5,204.8,15.3,595.4-36.4,769.6c-197.1,668.2-710.2,1087.4-1294.2,1056.8c-202.9-9.6-333.1-51.7-639.4-197.2c-118.7-57.4-227.8-103.4-239.3-103.4c-11.5,0-36.3,82.3-57.4,187.6C7170.9-694.6,6878,63.5,6529.6,647.4c-269.9,453.7-729.4,982.1-1095.1,1261.6c-82.3,63.2-172.3,132.1-197.2,153.2l-47.9,40.2l47.9,151.2c103.4,329.3,139.8,830.9,88.1,1209.9c-74.7,557.1-302.5,1052.9-645.2,1409c-135.9,137.8-149.3,147.4-225.9,147.4C4375.8,5020,4370.1,5016.2,4241.8,4853.4z"/></g></g>
</svg>`;

    var btn = document.createElement('div');
    btn.innerHTML = html;

    toolbar.addButton({
      tooltip: 'Cherry Pick',
      element: btn,
      callback: 'git-plus:cherry-pick'
    }); */

    toolbar.addButton({
      tooltip: 'Push',
      callback: 'git-plus:push',
      iconset: '',
      icon: 'repo-push'
    });

    toolbar.addButton({
      tooltip: 'Pull',
      callback: 'git-plus:pull',
      iconset: '',
      icon: 'repo-pull'
    });
  }

  dispose () {
    if (this.toolbar) { this.toolbar.removeItems(); }
  }
}
