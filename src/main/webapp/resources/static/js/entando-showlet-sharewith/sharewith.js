var currentUrl;
var currentTitle;
window.addEvent('domready', function(){
	currentUrl = encodeURIComponent(document.location.href);
	currentTitle = encodeURIComponent(document.title);
	var target = document.getElements('.entando-showlet-sharewith-buttons');
	entando_showlet_sharewith_buttons.each(function(item,index) {
		item.link = item.link.replace(/§URL§/g,currentUrl);
		item.link = item.link.replace(/§TITLE§/g,currentTitle);
		var a = new Element('a',{href: item.link});
		var img = null;
		if (item.image!==undefined && item.image != null) {
			img = new Element('img',{src :  entando_showlet_sharewith_imgURL+item.image});
		}
		a.set('text',item.title);
		if (img != null){
			img.inject(a,'top');
		}
		var tmp = new Element('div');
		a.inject(tmp);
		a = tmp.get('html');
		for(var i = 0;i<target.length;i++) {
			var currenTarget = target[i];
			currentTarget.set('html', currentTarget.get('html') +' '+ a);
		}
		tmp.destroy();
	});
});