$(document).ready(function() { 
	var table = $('#TableOfData').DataTable( {
		fixedColumns: {
			leftColumns: 1
		},
		ajax: "data/Stats.txt", 
		paging: false, 
		info: false, 
		deferRender: false,
		/* scrollY:    300, */
		scrollY:    '68vh',
		scrollCollapse: true,
   			scrollX:    true,
   			scroller:    false,
		columns: [
			{ className: "dt-body-left dt-head-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" }
			]
	} );
	$('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e)
		{
			$.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
		}
	);
	$('button.toggle-vis').on( 'click', function (e) {
		e.preventDefault();

		// Get the column API object
		var column = table.column( $(this).attr('data-column') );

		// Toggle the visibility
		column.visible( ! column.visible() );
	} );
} );
