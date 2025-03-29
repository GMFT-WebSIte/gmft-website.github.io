$(document).ready(function() { 
		$('table.GroupsIndiv').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			paging: false, 
			ordering: false, 
			searching: false, 
			info: false, 
			deferRender: false,
			/* scrollY:    300, */
			scrollY:    '33vh',
			scrollCollapse: true,
    		scrollX:    true,
    		scroller:    false,
			columns: [
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-left dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			"drawCallback": function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="10">'+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}			
		} );
		$('table.GroupsIndivAlone').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			paging: false, 
			ordering: false, 
			searching: false, 
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
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			"drawCallback": function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="10">'+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}			
		} );
		$('table.GroupsTeams').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			paging: false, 
			ordering: false, 
			searching: false, 
			info: false, 
			deferRender: false,
			/* scrollY:    300, */
			scrollY:    '33vh',
			scrollCollapse: true,
    		scrollX:    true,
    		scroller:    false,
			columns: [
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-left dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			"drawCallback": function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="14">'+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}			
		} );
		$('table.GroupsTeamsAlone').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			paging: false, 
			ordering: false, 
			searching: false, 
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
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			"drawCallback": function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="14">'+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}			
		} );
		$('table.Finals').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			paging: false, 
			ordering: false, 
			searching: false, 
			info: false, 
			deferRender: false,
			/* scrollY:    300, */
			scrollY:    '30vh',
			scrollCollapse: true,
    		scrollX:    true,
    		scroller:    false,
			columns: [
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-right dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-left dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			orderCellsTop: true,
			drawCallback: function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="9">'+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}																																							
		} );
		$('table.FinalsAlone').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			paging: false, 
			ordering: false, 
			searching: false, 
			info: false, 
			deferRender: false,
			/* scrollY:    300, */
			scrollY:    '68vh',
			scrollCollapse: true,
    		scrollX:    true,
    		scroller:    false,
			columns: [
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-right dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-left dt-head-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" }
				],
			orderCellsTop: true,
			drawCallback: function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="9">'+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}																																							
		} );
	$('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e)
		{
			$.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
		}
	);
} );