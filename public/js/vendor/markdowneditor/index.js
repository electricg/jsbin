/* globals $ */
(function () {
  'use strict';

  // Add css and javascript to stylize the output
  var cssLine = '@import "https://rawgit.com/electricg/5eb7aed3ae958dd450ba/raw/style.css";';
  var cssPanel = jsbin.panels.panels.css;
  var cssCode = cssPanel.getCode();
  var jsLine = 'document.body.className = "markdown-body";';
  var jsPanel = jsbin.panels.panels.javascript;
  var jsCode = jsPanel.getCode();

  if (cssCode.indexOf(cssLine) === -1) {
    cssPanel.setCode(cssLine + '\n' + cssCode);
  }
  if (jsCode.indexOf(jsLine) === -1) {
    jsPanel.setCode(jsLine + '\n' + jsCode);
  }
}());