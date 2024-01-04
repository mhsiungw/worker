function wait(ms, callback) {
	let start = Date.now();
	let now = start;

	while (now - start < ms) {
		now = Date.now();
	}

	console.log(callback);;
}

onmessage = function(e) {
	if (e.data.action === 'wait') {
		wait(5000, e.data.callback)
	}
	console.log('Worker: Posting message back to main script');
	postMessage(workerResult);
}