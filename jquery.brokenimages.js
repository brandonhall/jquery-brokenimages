/**
 * jQuery.brokenImages v0.1 | https://github.com/brandonhall/jquery-brokenimages
 * Copyright (c) Brandon Hall <b@brandonhall.me> | The MIT License
 */

;(function ($, window, document, undefined) {

  var pluginName = 'brokenImages';

  var defaults = {
    remove: false,
    replaceString: '',
    replaceClass: 'initials',
    replacementImage: '',
    customFunction: null
  };

  function Plugin(element, options) {
    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this.init();
  }

  $.extend(Plugin.prototype, {
    
    init: function() {

      if (this.settings.remove) {
        this.remove();
      }

      if (this.settings.replaceString.length) {
        this.replaceWithString();
      }

      if (this.settings.replacementImage.length) {
        this.replaceWithImage();
      }

      this.settings.customFunction && this.settings.customFunction(this.$element);
    },
    
    replaceWithString: function() {
      var $replaceEl = $('<div/>')
        .addClass(this.settings.replaceClass)
        .append('<span>' + this.settings.replaceString + '</span>');

      this.$element.replaceWith($replaceEl);
    },
    
    replaceWithImage: function() {
      this.$element.attr('src', this.settings.replacementImage);
    },
    
    remove: function() {
      this.$element.remove();
    }
    
  });

  $.fn[pluginName] = function(options) {
    this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
    return this;
  };

})(jQuery, window, document);