;(function($){
    $.fn.extend({
        latex: function(options) {
            this.defaultOptions = {
			    base_url:  'http://s.wordpress.com/latex.php',
                imgURL: function(latex_str, foo) {
                    return settings['base_url'] + '?' + 'latex=' + encodeURIComponent(latex_str) + '&' + settings['params'];
                },
                params: 'bg=ffffff&fg=000000&s=0'
            };

            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {
                var $this = $(this);
                
                var latex_str = $.trim($this.text());
                var img_url   = settings['imgURL'].call($this, latex_str);
                var img       = $('<img/>').attr({src: img_url, class: $this.attr('class')});
                $this.html('').replaceWith(img);
            });
        }
    });
})(jQuery);