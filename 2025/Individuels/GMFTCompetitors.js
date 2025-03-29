$(document).ready(function() { 
		var t = $('table.dataTableIndiv').DataTable(
			{
				columnDefs: [
					{ "visible": false, "targets": 0 }
				],
				order: [[ 2, 'asc' ]],
				ordering: true,
				paging: false, 
				info: false, 
				deferRender: false,
				/* scrollY:    300, */
				scrollY:    '68vh',
				scrollCollapse: true,
				scrollX:    true,
				scroller:    false,
				columnDefs: [ {
					searchable: false,
					orderable: false,
					targets: 0
				} ],
				columns: [
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-body-left dt-head-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" }
					],
				"drawCallback": function ( settings ) {
					var api = this.api();
					api.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
						cell.innerHTML = i+1;
					} );
				}
			}
		); 
		t.on( 'order.dt search.dt', function () {
			t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
				cell.innerHTML = i+1;
			} );
		} ).draw();
		var TableTeam = $('table.dataTableTeams').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ], [ 2, 'asc' ]],
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
				{ className: "dt-body-left dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			"drawCallback": function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( team, i ) {
					if ( last !== team ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="6">'+team+'</td></tr>'
						);
                    last = team;
					}
				} );
			}			
		} );
    	// Order by the grouping
    	$('table.dataTableTeams tbody').on( 'click', 'tr.group', function () {
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
		$('button.toggle-vis').on( 'click', function (e) {
			e.preventDefault();
 
			// Get the column API object
			var columnInd = t.column( $(this).attr('data-column') );
			var columnTeam = TableTeam.column( $(this).attr('data-column') );
	
			// Toggle the visibility
			columnInd.visible( ! columnInd.visible() );
			columnTeam.visible( ! columnTeam.visible() );
		} );
	}
);
