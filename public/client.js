var Workspace = Backbone.Router.extend(
{routes: {
  'showadddisplay': 'showadddisplay',
  'hideadddisplay': 'hideadddisplay'
  },
  showadddisplay: function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
    var genId = (Math.random()) * (Math.pow(10, 17));
    $('#idInput').val(genId);
  },
//  var addButton = $('#addnew').on('click', showAddDisplay);
      
  hideadddisplay:   function hideAddDisplay(evt){
    $('#adddisplay').removeClass('show');
    $('#adddisplay').addClass('hide');
  }, 
//  var hideDisplayButton = $('#hidepanel').on('click', hideAddDisplay);

});

var ViewControlsDisplay =  Backbone.View.extend({/*properties*/});
var viewControlsDisplay = new ViewControlsDisplay({el: '#controlsdisplay'});

var ViewListDisplay =  Backbone.View.extend({/*properties*/});
var viewListDisplay = new ViewListDisplay({el: '#catalogue'});

var ViewAddDisplay = Backbone.View.extend({/*properties*/});
var viewAddDisplay = new ViewAddDisplay({el: '#adddisplay'});

var RcRecord =  Backbone.Model.extend({
  initialize: function(){console.log("rcRecord model initialized")}
              });
var newRcRecord = new RcRecord();

newRcRecord = {
  artist: 'George Thorogood',//these values will come from the html form fields
  title: 'Move it On Over',
  label: 'Rounder',
  year: '1980',
  sku: '654-987-654',
  copies: '7',
  sale: 'yes',
  added: new Date(),
  id: 'rcRecord123456789'
};

var RcCollection =  Backbone.Model.extend({
  initialize: function(){console.log("rcCollection model initialized")}
              });

var newRcCollection = new RcCollection();

newRcCollection.on('change', function (){ 
    console.log ('this collection changed');
  });
  newRcCollection.on('add', function (){ 
    console.log ('something  was added to this collection');
  });


$(function(){
//    newRcRecord.set('html', '<tr><td>' +  newRcRecord.artist + '</td><td>' + newRcRecord.id + '</td></tr>');
    newRcCollection.set('rcRecord' + newRcRecord.id, newRcRecord);
//  rcCollection.set('html', '<tr><td>' +  newRcRecord.artist +
//                          '</td><td>' + newRcRecord.title +
//                          '</td><td>' + newRcRecord.label +
//                          '</td><td>' + newRcRecord.year +
//                          '</td><td>' + newRcRecord.sku +
//                          '</td><td>' + newRcRecord.copies +
//                          '</td><td>' + newRcRecord.sale +
//                          '</td><td>' + newRcRecord.added + 
//                          '</td><td>' + newRcRecord.id +
//                          '</td></tr>');
//    $('#catalogue').append(newRcRecord.get('html'));
  //$('#catalogue').append(newRcCollection.escape('html'));
//  $('#catalogue').append(newRcRecord.escape('artist', 'title', 'label', 'year', 'sku', 'copies', 'sale', 'id'));
});

var ControlDisplayModel =  Backbone.Model.extend();

var newControlDisplayModel = new ControlDisplayModel();

viewControlsDisplay.$el.append(
//            '<ul>
//              <li id="listcount"></li>
//            <li><button type="button" id="search" class="controlbutton">Search</button><input type="text" id="searchInput"></li>
//            <li><label for="autosync">Auto Sync</label>
//          <input type="checkbox" id="autosync"></li>
//            <li><button type="button" id="sync" class="controlbutton">Sync Server</button></li>
//            <li><select id="idDrop">
//              <option>Select Id...</option></select>
//              <a href="#adddisplay"><button type="button" id="updatebutton">Update Record</button></a>
//              <button type="button" id="deletebutton">Delete Record</button><br/></li>
//            <li><button type="button" id="clearlocal">Delete Collection</button></li>
//          </ul>'
  
);


var ListDisplayModel =  Backbone.Model.extend();

var newListDisplayModel = new ListDisplayModel();

//newListDisplayModel.set();
viewListDisplay.$el.append( '<tr><td>' +  newRcRecord.artist +
                          '</td><td>' + newRcRecord.title +
                          '</td><td>' + newRcRecord.label +
                          '</td><td>' + newRcRecord.year +
                          '</td><td>' + newRcRecord.sku +
                          '</td><td>' + newRcRecord.copies +
                          '</td><td>' + newRcRecord.sale +
                          '</td><td>' + newRcRecord.added + 
                          '</td><td>' + newRcRecord.id +
                          '</td></tr>');

var AddDisplayModel =  Backbone.Model.extend();

var newAddDisplayModel = new AddDisplayModel();
//newAddDisplayModel.set();
viewAddDisplay.$el.append(
//  '<form id="addrecord">
//	<div class="addcol">
//    <label for="artistInput" >Artist</label><br/>
//		<input type="text" id="artistInput" tabindex=1/><br/>
//    <label for="labelInput" >Label</label><br/>
//		<input type="text" id="labelInput" tabindex=4/><br/>
//     <label for="saleInput" >Selling</label>
//      <select id="saleInput" tabindex=7>
//        <option>No</option>
//        <option>Yes</option>
//        </select>
//     </div>
//  
//    
//      <div class="addcol">
//        <label for="titleInput" >Title</label><br/>
//		<input type="text" id="titleInput" tabindex=2 /><br/>
//        <label for="skuInput">SKU</label><br/>
//		<input type="text" id="skuInput" tabindex=5/><br/>
//             <label for="copiesInput">Copies</label><br/>
//		<input type="number" value="1" min="1" id="copiesInput" tabindex=8/>
//            
//   
//      </div>
//    
//  <div class="addcol">
//    <label for="yearInput">Year</label><br/>
//    <select id="yearInput" tabindex=3></select><br/>
//    <label for="idInput">Id</label><br/>
//		<input type="text" id="idInput" tabindex=6/><br/>
//    <button type="button" id="commitnew" tabindex=9>Commit Item</button>
//    <button type="button" id="hidepanel" tabindex=10>Hide Panel</button>
//	</div>
//    </form>'
);






