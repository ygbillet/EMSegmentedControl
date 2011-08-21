/*EMSegmentedControlExtend.js
Description: A drop-in replacement for standard input radio matrices and checkbox, that creates a toggleable segmented control.
Based on work from : Collin Henderson - http://syropia.net - collin@syropia.net
Modification : Yves-Gael Billet
Improvements : 
 - Add specific function for checkbox (multiple selection)
Version: 1.0
*/
(function($) {

    //Attach this new method to jQuery
    $.fn.extend({

		//SegmentedControl for Checkbox
        EMSegmentedControlCb: function() {

            //Iterate over the current set of matched elements
            this.each(function() {
                var $markup = $('<div class="segmented_control_cb">');
                $(this).children('label').each(function(i) {
                    $markup.append('<span class="segment">' + $(this).text() + '</span>') ;     
                });
                $markup.append('</div>');
                $markup.insertAfter($(this).children('label:last'));
                $(this).children('input,label').hide();
            });
            
            //Bind 'click' event
			$('div.segmented_control_cb span.segment').click(function() {
				if( $(this).hasClass('active') ) {
					$(this).removeClass('active');
					$(this).parent().parent().children('input:eq(' + $(this).index() + ')').attr('checked', false);       
				} else {
					$(this).addClass('active');
					$(this).parent().parent().children('input:eq(' + $(this).index() + ')').attr('checked', true);      
				}
			});
            
            return ;
        }
    });
})(jQuery);


(function($) {

    //Attach this new method to jQuery
    $.fn.extend({

		//SegmentedControl for RadioButton. 
        EMSegmentedControlRb: function() {

            //Iterate over the current set of matched elements
            this.each(function() {
                var $markup = $('<div class="segmented_control_rb">');
                $(this).children('label').each(function(i) {
                    $markup.append('<span class="segment">' + $(this).text() + '</span>')
                });
                $markup.append('</div>');
                $markup.insertAfter($(this).children('label:last'));
                $(this).children('input,label').hide();
            });
            
            //Bind 'click' event
			$('div.segmented_control_rb span.segment').click(function() {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				$(this).parent().parent().children().attr('checked', false);                    
				$(this).parent().parent().children('input:eq(' + $(this).index() + ')').attr('checked', true);
			});    
			
			return ;            
        }
    });
})(jQuery);