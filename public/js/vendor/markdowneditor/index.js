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
  var htmlLine = '# JS Bin markdown editor';
  var htmlPanel = jsbin.panels.panels.html;
  var htmlCode = htmlPanel.getCode();

  if (cssCode.indexOf(cssLine) === -1) {
    cssPanel.setCode(cssLine + '\n' + cssCode);
  }
  if (jsCode.indexOf(jsLine) === -1) {
    jsPanel.setCode(jsLine + '\n' + jsCode);
  }
  if (htmlCode.indexOf(htmlLine) === -1) {
    htmlPanel.setCode(htmlLine + '\n' + htmlCode);
  }
  $.when(
    $.getScript(jsbin.static + '/js/vendor/cm_addons/toolbar/toolbar.js'),
    $.getScript(jsbin.static + '/js/vendor/cm_addons/toolbar/markdown/index.js'),
    $('<link/>', {
       rel: 'stylesheet',
       type: 'text/css',
       href: jsbin.static + '/js/vendor/cm_addons/toolbar/toolbar.css'
    }).appendTo('head'),
    $('<link/>', {
       rel: 'stylesheet',
       type: 'text/css',
       href: jsbin.static + '/js/vendor/cm_addons/toolbar/markdown/index.css'
    }).appendTo('head'),
    $('<link/>', {
       rel: 'stylesheet',
       type: 'text/css',
       href: jsbin.static + '/js/vendor/markdowneditor/style.css'
    }).appendTo('head'),
    $.Deferred(function(deferred){
      $(deferred.resolve);
    })
  ).done(function() {
    htmlPanel.editor.setOption('toolbarOpt', { buttons: buttons_markdown });
    htmlPanel.editor.setOption('toolbar', true);
    $document.trigger('sizeeditors');
  });
}());