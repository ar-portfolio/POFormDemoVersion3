/* global $ */
(function() {
    'use strict';

    var i = 0;
    
    $(document).click(e => {
        e.preventDefault();
    });

    $('#orderDate').datepicker();

    $('#orderDate').val($.datepicker.formatDate('mm/dd/yy', new Date()));
    
    $('#inspectionDate').datepicker();

    $('#addItemButton').click(() => {
        let count = i++;
        $(  
            '<div id="' + count + '" class="col-md-8 col-md-offset-2 well well-lg item">' +
                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Item:</label>' +
                        '<div class="col-md-3">' +
                            '<select class="form-control">' +
                                '<option>RJ14-12-P</option>' +
                                '<option>RJ14-4-M</option>' +
                                '<option>RJ11-SKG</option>' +
                            '</select>' +
                        '</div>' +
         
                        '<div class="col-md-4">' +
                            '<input type="text" class="form-control" placeholder="Search"/>' +
                        '</div>' +
                        '<div class="col-md-1 searchButton">' +
                            '<button class="btn btn-info glyph"><span class="glyphicon glyphicon-search"></span></button>' +
                        '</div>' +
                    
                        '<div class="col-md-2">' +
                            '<button class="btn btn-success col-md-12">New Item</button>' +
                        '</div>' +
                    '</div>' +


                   '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Description:</label>' +
                        '<div class="col-md-10">' +
                            '<textarea class="form-control" rows="2" placeholder="Based on selected Item"></textarea>' +
                        '</div>' +
                    '</div>' +


                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Quantity:</label>' +
                        '<div class="col-md-2">' +
                            '<select class="form-control">' +
                                '<option>Eaches</option>' +
                                '<option>Cases</option>' +
                            '</select>' +
                        '</div>' +
                        '<div class="col-md-4">' +
                            '<input type="number" class="form-control" placeholder="Manual entry OR autofill -->"/>' +
                        '</div>' +
                        
                        '<div class="col-md-3 col-md-offset-1">' +
                            '<button class="btn btn-primary col-md-12 autofill" data-toggle="modal" data-target="#containerModal">Autofill By Container</button>' +
                        '</div>' +
                    '</div>' +

                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Rate:</label>' +
                        '<div class="col-md-10">' +
                            '<input type="text" class="form-control" value="Based on selected Item and QTY type (This field is Read Only)" readonly/>' +
                        '</div>' +
                    '</div>' +

                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Total:</label>' +
                        '<div class="col-md-10">' +
                            '<input type="text" class="form-control" value="Quantity * Rate (This field is Read Only)" readonly/>' +
                        '</div>' +
                    '</div>' +

                    '<div class="pull-right">' +
                        '<button id="addAnotherItemButton" class="btn btn-danger">Cancel</button>' +
                    '</div>' +

                '</div>' +
                '<div class="clearfix"></div>'
        )
        .appendTo($('#itemDiv'))
        .find('button:last')
        .click(() => {
            $('#' + count).remove();
        });
    });
}());
