require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();


fetch('/authInfo').then(function (res) {
	return res.json();
}).then(function (response) {
	sdk.triggerAuth2(response);
});


var post = function (url, data, cb) {
	fetch('/proxy/' + url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: self.headers,
		credentials: 'include',
		mode: 'no-cors'
	}).then(function (res) {
		if (res.status === 401) {
			setTimeout(function () {
				post(url, data, cb);
			}, 100);
			return Promise.reject('401');
		}
		return res.json();
	}).then(function (data) {
		cb(data);
	});
};

window.setContent = function (url) {
	sdk.setContent('<img src="' + url + '"></img>');
};

var getImages = function () {
	post('asset/v1/content/assets/query', {
		query: {
			property: "assetType.id",
			simpleOperator: "in",
			value: [20, 22, 23, 28]
		}
	}, function (data) {
		var dom = '';
		for (var key in data.items) {
			var src = data.items[key].fileProperties.publishedURL;
			dom += '<div style="display:inline-block;width:50px;border:1px solid white;height:50px"><img style="width:50px;max-height:50px;background-color:lightgray;" onclick="setContent(\'' + src + '\')" src="' + src + '"></img></div>';
		}
		document.getElementById('workspace').innerHTML = dom;
	});
};

getImages();
