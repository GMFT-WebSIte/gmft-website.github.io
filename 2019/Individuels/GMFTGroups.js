$(document).ready(function() { 
	$('table.dataTableIndiv').DataTable( {
		columnDefs: [
			{ "visible": false, "targets": 0 }
		],
		order: [[ 0, 'asc' ]],
		ordering: false,
		paging: false, 
		info: false, 
		deferRender: false,
		/* scrollY:    300, */
		scrollY:    '68vh',
		scrollCollapse: true,
    	scrollX:    true,
    	scroller:    false,
		columns: [
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-body-left dt-head-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-body-left dt-head-center dt-nowrap small" }
			],
		drawCallback: function ( settings ) {
			var api = this.api();
			var rows = api.rows( {page:'current'} ).nodes();
			var last=null;
				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
				if ( last !== group ) {
					$(rows).eq( i ).before(
						'<tr class="group"><td colspan="7">'+group+'</td></tr>'
					);
                   last = group;
				}
			} );
		}			
	} );
	$('table.dataTableTeams').DataTable( {
		columnDefs: [
			{ "visible": false, "targets": 0 }
		],
		order: [[ 0, 'asc' ]],
		ordering: false,
		paging: false, 
		info: false, 
		deferRender: false,
		/* scrollY:    300, */
		scrollY:    '68vh',
		scrollCollapse: true,
   		scrollX:    true,
   		scroller:    false,
		columns: [
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-center dt-nowrap small" },
			{ className: "dt-body-left dt-head-center dt-nowrap small" }
			],
		drawCallback: function ( settings ) {
			var api = this.api();
			var rows = api.rows( {page:'current'} ).nodes();
			var last=null;
				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
				if ( last !== group ) {
					$(rows).eq( i ).before(
						'<tr class="group"><td colspan="5">'+group+'</td></tr>'
					);
                   last = group;
				}
			} );
		}			
	} );
    // Order by the grouping
    $('table.dataTable tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 0 && currentOrder[1] === 'asc' ) {
            table.order( [ 0, 'desc' ] ).draw();
        }
        else {
            table.order( [ 0, 'asc' ] ).draw();
        }
    } );
	$('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e)
		{
			$.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
		}
	);
} );