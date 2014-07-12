	// initialization
	function _init() {
		var $target = $(this);

		$target.each(function(){
			var $this =$(this);

		});

		var data = {
			$links: $target.find(".tab-nav .tab"),
			$content: $target.find(".tab-content .tab")
		};

			$this.on("click", ".tab-nav .tab", data, onTabClick);
		});
	}

	// handle tab clicks
	function onTabClick(event) {
		var data = event.data;
		var $target = $(event.target);
		var index = data.$links.index($target);

		data.$links.removeClass("active").eq(index).addClass("active");
		data.$content.removeClass("active").eq(index).addClass("active");

	}

	$.fn.myTabs = function(method) {
		if (pub[method]) {
			retunr pub[method].apply(this, Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || !method) {

		}
	}