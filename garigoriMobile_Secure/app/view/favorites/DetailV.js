
Ext.define('Garigori.view.favorites.DetailV', {
    extend: 'Ext.Container',
    alias: 'widget.favoritesdetailv',
    
    config: {
        title: 'Favorites',
        layout: {
            type: 'hbox'
        },
        tpl: [
              '<table border="0" width="100%">',
              '<tr>',
              '	<td>{title}</td>',
              '	<td><div class="x-rating-star-hover" id="favoriteMark2"></div></td>',
              '</tr>',
              '<tr>',
          	'	<td><img id="player2" src="{thumbnail0}" width="320" height="180" alt="Garigori"></td>',
          	'	<td><button>facebook</button><button>twitter</button></td>',
          	'</tr>',
          	'<tr class=table_content>',
      		'	<td colspan="2">인터뷰내용</td>',
      		'</tr>',
      		'<tr>',
  			'<td colspan="2">{content}</td>',
  			'</tr>',
  			'</table>',
          ],
        items: [
            
        ]
        
    },
	initialize: function() {
		this.callParent();
		// View에 event를 controller에 넘겨줌
		this.relayEvents(this.element, ['tap']);
	}

});