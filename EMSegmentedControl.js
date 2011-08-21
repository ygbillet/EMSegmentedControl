/*EMSegmentedControl.js
Description: A drop-in replacement for standard input radio matrices, that creates a toggleable segmented control.
Author : Collin Henderson
Modification : Yves-Gael Billet
Website: http://syropia.net
Contact: collin@syropia.net
Version: 0.91
*/
 (function($) {

    //Attach this new method to jQuery
    $.fn.extend({


        EMSegmentedControl: function() {

            //Iterate over the current set of matched elements
            this.each(function() {

                var $markup = $('<div class="segmented_control">');
                $(this).children('label').each(function(i) {
                    $markup.append('<span class="segment">' + $(this).text() + '</span>')
                });
                $markup.append('</div>');
                $markup.insertAfter($(this).children('label:last'));
                $(this).children('input,label').hide();
            });
            
            $('div.segmented_control span.segment').click(function() {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				$(this).parent().parent().children().attr('checked', false);                      
            	$(this).parent().parent().children('input:eq(' + $(this).index() + ')').attr('checked', true);
            });
            
            return ;
        }
    });
})(jQuery);