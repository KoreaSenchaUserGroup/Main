Ext.define('Garigori.view.home.CoverFlowV', {
    extend: 'Ext.ux.Cover',
    alias: 'widget.coverflowv',
    
    config: {
        itemCls: 'my-cover-item',
	    itemTpl : [
			'<div>',
				'<div class="company">노무회계사</div>',
				'<div class="image"><tpl if="thumbnail"><img  src="{thumbnail}"></tpl></div>',
			'</div>'
		],
		store : 'coverFlowS',
//		pageSize : 5,
//    	limit: 5,
//		selectedIndex: 2,
		// scrollable: {
			// direction: 'horizontal',
			// indicators: false,
			// directionLock:true
		// },

		listeners:{
			itemdoubletap: function(){
				console.log('itemdbltap', arguments);
			},
			itemtap: function(cover, idx){
				console.log('itemtap', arguments);
			},
			scope: this
		}
    },
    initComponent: function() {
        this.callParent();
    }

});