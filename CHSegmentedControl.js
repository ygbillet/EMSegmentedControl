/*CHSegmentedControl.js
Description: A drop-in replacement for standard input radio matrices, that creates a toggleable segmented control.
Author: Collin Henderson
Website: http://syropia.net
Contact: collin@syropia.net
Version: 0.9
*/
 (function($) {

    //Attach this new method to jQuery
    $.fn.extend({


        CHSegmentedControl: function() {

            //Iterate over the current set of matched elements
            return this.each(function() {
                
				var $markup = $('<div class="segmented_control">');
				$(this).children('label').each(function(i) {
					$markup.append('<span class="segment">'+$(this).text()+'</span>')
				});
				$markup.append('</div>');
				$markup.insertAfter($(this).children('label:last'));
                $(this).children('input,label').hide();
				var modifiedIndex;
                $('div.segmented_control span.segment').click(function() {
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
					modifiedIndex = $(this).index() * 3;
                    $(this).parent().parent().children('input:eq('+ $(this).index() +')').attr('checked', true);
					
			     });
				$(this).children('input').click(function() {
					console.log($(this).index());
				});

            });

        }
    });
})(jQuery);