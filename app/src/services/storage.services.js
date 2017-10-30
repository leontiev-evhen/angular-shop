angular
	.module('app')
	.factory('storageServise', storageServise);

function storageServise () {
	return {
		setInfo: setInfo,
		getInfo: getInfo
	};

	var info;
	function setInfo (data) {
		info = data;
	}
	
	function getInfo () {
		return info;
	}
}
