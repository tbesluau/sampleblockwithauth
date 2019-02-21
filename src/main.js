

var BlockSDK = require('blocksdk');
if (window.self === window.top) {
	document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder Editor only.';
} else {
	var sdk = new BlockSDK();
	sdk.getContent(function (content) {
		var quill = new Quill('#editor-container', {
			theme: 'snow'
		});
		quill.root.innerHTML = content;
		function saveText() {
			var html = quill.root.innerHTML;
			sdk.setContent(html);
			sdk.setSuperContent('This is awesome content: ' + html);

			sdk.getData(function (data) {
				var numberOfEdits = data.numberOfEdits || 0;
				sdk.setData({
					numberOfEdits: numberOfEdits + 1
				});
			});
		}
		quill.on('text-change', saveText);
	});
}
