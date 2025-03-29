$(document).ready(function() { 
		var TableInd = $('table.dataTableIndiv').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 },
				{ "orderable": false, "targets": "_all" }
			],
			order: [[ 0, 'asc' ], [ 1, 'asc' ], [ 2, 'asc' ]],
			/*ordering: false,*/
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
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-body-right dt-head-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-body-left dt-head-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" }
				],
			drawCallback: function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					var ThisRow = $(rows).eq(i);
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="11">'+group+'</td><td></tr>'
						);
                  		last = group;
					}
				} );
			}			
		} );
		var TableTeam = $('table.dataTableTeams').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 },
				{ "orderable": false, "targets": "_all" }
			],
			order: [[ 0, 'asc' ]],
			/*ordering: false,*/
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
					{ className: "dt-body-right dt-head-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-body-left dt-head-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" },
					{ className: "dt-center dt-nowrap small" }
				],
			drawCallback: function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;
				api.column(0, {page:'current'} ).data().each( function ( group, i ) {
					var ThisRow = $(rows).eq(i);
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="groupTop"><td>'+group+'</td></tr>'
						);
                  		last = group;
					}
				} );
				last=null;
				api.column(1, {page:'current'} ).data().each( function ( group, i ) {
					var ThisRow = $(rows).eq(i);
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td>'+group+'</td><td class="dt-right">'+
								$(rows).eq( i ).find('td').eq(1).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(2).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(3).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(4).html()+'</td><td>'+
								$(rows).eq( i ).find('td').eq(5).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(6).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(7).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(8).html()+'</td><td class="dt-center">'+
								$(rows).eq( i ).find('td').eq(9).html()+'</td><td>'+
								$(rows).eq( i ).find('td').eq(10).html()+'</td></tr>'
						);
					  	ThisRow.remove();
                  		last = group;
					}
					else {
						ThisRow.find('td').eq(0).html('');
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
			var column = TableInd.column( $(this).attr('data-column') );
			var columnTeam = TableTeam.column( $(this).attr('data-column') );
	
			// Toggle the visibility
			column.visible( ! column.visible() );
			columnTeam.visible( ! columnTeam.visible() );
    } );
} );