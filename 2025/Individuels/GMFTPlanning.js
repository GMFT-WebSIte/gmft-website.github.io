$(document).ready(function() { 
		var table = $('#TableOfData').DataTable( {
			columnDefs: [
				{ "visible": false, "targets": 0 }
			],
			order: [[ 0, 'asc' ]],
			ajax: "data/Planning.txt", 
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
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-center dt-nowrap small" },
				{ className: "dt-body-right dt-head-center dt-nowrap small" },
				{ className: "dt-body-left dt-head-center dt-nowrap small" },
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
							'<tr class="group"><td colspan="8">Row - '+group+'</td></tr>'
						);
                    last = group;
					}
				} );
			}			
		} );
    // Order by the grouping
    $('#TableOfData tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 0 && currentOrder[1] === 'asc' ) {
            table.order( [ 0, 'desc' ] ).draw();
        }
        else {
            table.order( [ 0, 'asc' ] ).draw();
        }
    } );

    $('button.toggle-vis').on( 'click', function (e) {
        e.preventDefault();
 
        // Get the column API object
        var column = table.column( $(this).attr('data-column') );
 
        // Toggle the visibility
        column.visible( ! column.visible() );
    } );} );
