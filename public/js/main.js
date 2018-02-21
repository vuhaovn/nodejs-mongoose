$(document).ready(() => {

	$('.delete-task').on('click', (e) => {
		e.preventDefault();
		var id = $(e.target).attr('id');
		$.ajax({
			type: 'DELETE',
			url: '/task/' + id,
			success: (res) => {
				alert('Deleted !!!');
				window.location.href='/';
			},
			error: (err) => {
				console.log(err);
			}
		})
	});

});