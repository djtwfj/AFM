

$(document).ready(function () {
    $('#iframemap').css("height", $(window).height() - 180 + "px");
    $('#closemodalwindow').click(function () {
        $('#modal-container').modal('hide');
    });

  
   
});



if (location.pathname.indexOf('leases') != -1) {
    $('.side-nav').find('a[href*="leases"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="leases"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('tracts') != -1) {
    $('.side-nav').find('a[href*="tracts"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="tracts"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('map') != -1) {
    $('.side-nav').find('a[href*="home/map"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="home/map"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('account') != -1 || location.pathname.indexOf('groups') != -1 || location.pathname.indexOf('userroles') != -1) {
    $('.side-nav').find('a[href*="account"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="account"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('districts') != -1 || location.pathname.indexOf('rights') != -1 || location.pathname.indexOf('leasetypes') != -1 || location.pathname.indexOf('ratetypetypes') != -1 || location.pathname.indexOf('ratetypetimes') != -1 || location.pathname.indexOf('ratetypeunits') != -1 || location.pathname.indexOf('insurancetypes') != -1 || location.pathname.indexOf('status') != -1 || location.pathname.indexOf('roletypes') != -1) {

    $('.side-nav').find('a[href*="districts"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="districts"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('owners') != -1) {

    $('.side-nav').find('a[href*="owners"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="owners"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('lessees') != -1) {
    $('.side-nav').find('a[href*="lessees"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="lessees"]').find('span').css('color', '#6aa74b');
}
else if (location.pathname.indexOf('entities') != -1) {
    $('.side-nav').find('a[href*="entities"]').closest('li').addClass('active');
    $('.side-nav').find('a[href*="entities"]').find('span').css('color', '#6aa74b');
}



$('.dataTableTracts').DataTable({
    "bPaginate": false,
    "bFilter": true,
    "bInfo": false,
    "bSort": false
});




$('.trhover').hover(function () {
    $(this).css({'background-color': '#eeeeee', 'cursor': 'pointer'})
    
  }, function () {
      
    $(this).css({'background-color': 'transparent', 'cursor': 'default'})
  });




  function getseletedleaseid4edit() {
      if ($('[name=selectedlease]:checked').length == 1) {
          location.href = "editlease/" + $('[name=selectedlease]:checked').val();
      }
      else {
          alert("Please select only one item to edit!");
          location.href = "#";
      }
  }


  function getseletedleaseid4delete() {
      if ($('[name=selectedlease]:checked').length == 1) {
          location.href = "deletelease/" + $('[name=selectedlease]:checked').val();
      }
      else {
          alert("Please select only one item to delete!");
          location.href = "#";
      }
  }


      function selectetractid4edit() {
          if ($('[name=selectedtractid]:checked').length == 1) {
              location.href = "edittract/" + $('[name=selectedtractid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }

      function selectetractid4delete() {
          if ($('[name=selectedtractid]:checked').length == 1) {
              location.href = "deletetract/" + $('[name=selectedtractid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }

     
      function getseleteddistrictid4edit() {
          if ($('[name=selecteddistrictid]:checked').length == 1) {
              location.href = "editdistrict/" + $('[name=selecteddistrictid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }
    
      function getseleteddistrictid4delete() {
          if ($('[name=selecteddistrictid]:checked').length == 1) {
              location.href = "deletedistrict/" + $('[name=selecteddistrictid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }


     
      function getseletedownerid4edit() {
          if ($('[name=selectedownerid]:checked').length == 1) {
              location.href = "editowner/" + $('[name=selectedownerid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }
    
      function getseletedownerid4delete() {
          if ($('[name=selectedownerid]:checked').length == 1) {
              location.href = "deleteowner/" + $('[name=selectedownerid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }



      function getseletedlesseeid4edit() {
          if ($('[name=selectedlesseeid]:checked').length == 1) {
              location.href = "editlessee/" + $('[name=selectedlesseeid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }

      function getseletedlesseeid4delete() {
          if ($('[name=selectedlesseeid]:checked').length == 1) {
              location.href = "deletelessee/" + $('[name=selectedlesseeid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }


      function getseletedstatusid4edit() {
          if ($('[name=selectedstatusid]:checked').length == 1) {
              location.href = "editstatus/" + $('[name=selectedstatusid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }

      function getseletedstatusid4delete() {
          if ($('[name=selectedstatusid]:checked').length == 1) {
             
              location.href = "deletestatus/" + $('[name=selectedstatusid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }
                         
      

      function getseletedleasetypeid4edit() {
          if ($('[name=selectedleasetypeid]:checked').length == 1) {
              location.href = "editleasetype/" + $('[name=selectedleasetypeid]:checked').val();
          }
          else {
              alert("Please select only one item to edit!");
              location.href = "#";
          }
      }
      

      $('[data-toggle="tooltip"]').tooltip();
  
  


    
//upload geom
    
      var extentions = [".dbf", ".shp", ".shx", ".xml"];
    
      $('.inputfile').on('change', function (e) {
          var files = e.target.files;
          if (files.length > 0) {
              if (files.length == 1) {
                  if (files[0].name.substring(files[0].name.length - 4, files[0].name.length) != ".map" && extentions.indexOf(files[0].name.substring(files[0].name.length - 4, files[0].name.length)) != -1) {
                      bootbox.alert("Upload failed!<br/>Please attach all of four files (.dbf/.shp/.shx/.xml)!");
                      $('.inputfile').val("");
                      $('#layerselection').css('display', 'none');
                      $('#geomselection').css('display', 'none');
                      return false;
                  }
              }
              else {
                  var extentions2 = new Array();
                  for (var i = 0; i < files.length; i++) {
                      extentions2.push(files[i].name.substring(files[i].name.length - 4, files[i].name.length));
                  }
                  for (var j = 0; j < extentions.length; j++) {
                      if (extentions2.indexOf(extentions[j]) == -1) {
                          bootbox.alert("Upload failed!<br/>Please attach all of four files (.dbf/.shp/.shx/.xml)!");
                          $('.inputfile').val("");
                          $('#layerselection').css('display', 'none');
                          $('#geomselection').css('display', 'none');
                          return false;
                      }
                  }
              }
             
              $(".uploadgeom").attr("disabled", false);
              $(".uploadgeom").off('click').on('click', function () {
              // e.preventDefault();
              $('#modal-container').modal('show');
              $('.modal-content').html("<div style='position:fixed; top:40%; left:45%; z-index :10000000; width: 1px;'><img src='../../Images/ajax-loader.gif'/></div>");
              var layerselection = $('#layerstoselect');
              layerselection.empty();
              
                  if (window.FormData !== undefined) {
                      var data = new FormData();
                      for (var x = 0; x < files.length; x++){
                          data.append("file" + x, files[x]);
                      }
                      $.ajax({
                          url: window.location.href.replace('edit', 'fileupload'),
                          type: "POST",
                          contentType: false,
                          data: data,
                          processData: false,
                          cache: false,
                          success: function (result) {
                              $('#modal-container').modal('hide');
                              $('.modal-content').html("");
                              
                              try {
                                 
                                  if (jQuery.isArray(result)) {
                                      $('.bootbox').css("background-color", "black");
                                      bootbox.alert(result[0].Value);
                                          var i = 0;
                                          $(result).each(function () {
                                              if (i > 0) {
                                                $(document.createElement('option'))
                                                .attr('value', this.Id)
                                                .text(this.Value)
                                                .appendTo(layerselection);
                                              }
                                              i++;
                                          });
                                          $('.inputfile').val("");
                                          $('#layerselection').css('display', 'block');


                                          $('#layerstoselect').off('change').on('change', function (e) {
                                              $('#modal-container').modal('show');
                                              $('.modal-content').html("<div style='position:fixed; top:40%; left:45%; z-index :10000000; width: 1px;'><img src='../../Images/ajax-loader.gif'/></div>");

                                              if ($(this).val() != "") {
                                                  $('#geomselection').css('display', 'block');
                                                  var geometryselection = $('#geomstoselect');
                                                  geometryselection.empty();
                                                  var objid = { id: $(this).val() };
                                                  $.ajax({
                                                      type: "POST",
                                                      url: window.location.href.split('edit')[0] + "GetItems",
                                                      data: objid,
                                                      datatype: "html",
                                                      success: function (data) {
                                                          if (data.length > 0) {
                                                              if (data.indexOf("TRACT_CODE") != -1) {
                                                                  $('#modal-container').modal('hide');
                                                                  $('.modal-content').html("");
                                                                  bootbox.alert(data);
                                                              }
                                                              else {
                                                                  for (var i = 0; i < data.length; i++) {
                                                                      $(document.createElement('option'))
                                                                       .attr('value', data[i].Id)
                                                                       .text(data[i].Value)
                                                                       .appendTo(geometryselection);
                                                                  }
                                                                  $('#modal-container').modal('hide');
                                                                  $('.modal-content').html("");

                                                                  $('#geomstoselect').off('change').on('change', function (e) {
                                                                      if ($(this).val() != "") {
                                                                          $('#addgeom').attr("disabled", false);
                                                                      }
                                                                      else {
                                                                          $('#addgeom').attr("disabled", true);
                                                                      }
                                                                  });

                                                                  $('#addgeom').off('click').on('click', function (e) {
                                                                     
                                                                      if ($("#geomstoselect").val().trim() != $("#TractCode").val().trim()) {
                                                                          bootbox.confirm({
                                                                              title: 'ADD GEOMETRY',
                                                                              message: "TRACT CODE doesn't match. Do you want to import anyway?",
                                                                              buttons: {
                                                                                  'cancel': {
                                                                                      label: 'No',
                                                                                      className: 'btn-default pull-left'
                                                                                  },
                                                                                  'confirm': {
                                                                                      label: 'Yes',
                                                                                      className: 'btn-primary pull-right'
                                                                                  }
                                                                              },
                                                                              callback: function (result) {
                                                                                  if (result) {
                                                                                      $('#modal-container').modal('show');
                                                                                      $('.modal-content').html("<div style='position:fixed; top:40%; left:45%; z-index :10000000; width: 1px;'><img src='../../Images/ajax-loader.gif'/></div>");
                                                                                      var geomtoadd = { id: $('#geomstoselect').val(), tractid: window.location.href.split('edit/')[1], operation: $(this).attr("id") };
                                                                                      $.ajax({
                                                                                          type: "POST",
                                                                                          url: window.location.href.split('edit')[0] + "addgeom",
                                                                                          data: geomtoadd,
                                                                                          datatype: "html",
                                                                                          success: function (data) {
                                                                                              $('#modal-container').modal('hide');
                                                                                              $('.modal-content').html("");
                                                                                              bootbox.alert(data.split('#')[0]);
                                                                                              $('#GIS_Acres').val(data.split('#')[1]);
                                                                                              if ($('#GIS_Acres').val() * 1 > 0) {
                                                                                                  $('.geobutton').attr("disabled", false);
                                                                                                  $('.geobutton').click(function (e) {
                                                                                                      if ($(this).attr('id') == "btncaltractgeom") {
                                                                                                          $('#TractAcres').val($('#GIS_Acres').val());
                                                                                                          bootbox.alert("The new TRACT ACRES can be saved with button SAVE CHANGES!");
                                                                                                      }
                                                                                                  });
                                                                                              }
                                                                                          }
                                                                                      });
                                                                                  }
                                                                              }
                                                                          });
                                                                      }
                                                                      else {
                                                                          $('#modal-container').modal('show');
                                                                          $('.modal-content').html("<div style='position:fixed; top:40%; left:45%; z-index :10000000; width: 1px;'><img src='../../Images/ajax-loader.gif'/></div>");
                                                                          var geomtoadd = { id: $('#geomstoselect').val(), tractid: window.location.href.split('edit/')[1], operation: $(this).attr("id") };
                                                                          $.ajax({
                                                                              type: "POST",
                                                                              url: window.location.href.split('edit')[0] + "addgeom",
                                                                              data: geomtoadd,
                                                                              datatype: "html",
                                                                              success: function (data) {
                                                                                  $('#modal-container').modal('hide');
                                                                                  $('.modal-content').html("");
                                                                                  bootbox.alert(data.split('#')[0]);
                                                                                  $('#GIS_Acres').val(data.split('#')[1]);
                                                                              }
                                                                          });
                                                                      }
                                                                  });
                                                              }

                                                          }
                                                      }
                                                  });

                                              }
                                          });
                                  }
                                  else {
                                      bootbox.alert(result);
                                  }
                              } catch (e) {
                                
                              }
                          },
                          error: function (xhr) {
                              alert('error');
                          }
                      });   
                  }
             });
          }
      });
    



      $('.tractstate').on('change', function (e) {
          if ($(this).val() != "") {
              var geometryselection = $('#County');
              geometryselection.empty();
              var objid = { id: $(this).val() };
              if (window.location.href.indexOf('edit')!=-1) {
                  $.ajax({
                      type: "POST",
                      url: window.location.href.split('edit')[0] + "GetCounties",
                      data: objid,
                      datatype: "html",
                      success: function (data) {
                          if (data.length > 0) {
                              for (var i = 0; i < data.length; i++) {
                                  $(document.createElement('option'))
                                   .attr('value', data[i].Id)
                                   .text(data[i].Value)
                                   .appendTo(geometryselection);
                              }
                          }
                      },
                      error: function (xhr) {
                          alert('error');
                      }
                  });
              }
              else if (window.location.href.indexOf('create') != -1) {
                  $.ajax({
                      type: "POST",
                      url: window.location.href.replace("create", "GetCounties"),
                      data: objid,
                      datatype: "html",
                      success: function (data) {
                          if (data.length > 0) {
                              for (var i = 0; i < data.length; i++) {
                                  $(document.createElement('option'))
                                   .attr('value', data[i].Id)
                                   .text(data[i].Value)
                                   .appendTo(geometryselection);
                              }
                          }
                      },
                      error: function (xhr) {
                          alert('error');
                      }
                  });
              }
             

          }
      });