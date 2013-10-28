// Source: https://github.com/coreyti/showdown

// XXX rename to 'markdown' and credit showdown some other way?

Package.describe({
  summary: "Markdown-to-HTML processor"
});

var _ = Npm.require('underscore');

Package.on_use(function (api) {
  api.add_files("showdown.js");
  api.export('Showdown');
});
