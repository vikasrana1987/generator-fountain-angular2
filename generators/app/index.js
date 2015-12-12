const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting: function () {
    this.options.framework = 'angular2';
    this.fountainPrompting();
  },

  configuring: function () {
    this.mergeJson('package.json', {
      dependencies: {
        angular2: '^2.0.0-alpha.52',
        'reflect-metadata': '^0.1.2',
        'zone.js': '^0.5.8'
      }
    });
  },

  composing: function () {
    this.composeWith('fountain-gulp', { options: this.props });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src')
    );
  }
});
