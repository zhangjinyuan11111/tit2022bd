document.getElementById('fontResizeButton').addEventListener('click', function() {
	var content = document.getElementById('content');
	if (content.classList.contains('large')) {
		content.classList.remove('large');
		content.classList.add('small');
	} else if (content.classList.contains('small')) {
		content.classList.remove('small');
		content.classList.add('large');
	} else {
		content.classList.add('large');
	}
});