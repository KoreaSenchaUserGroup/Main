Ext.define('Garigori.view.speaker.CategoryV', {
    extend: 'Ext.dataview.List',
    alias: 'widget.speakercategoryv',
    id: "CategoryID",

    config: {
        store: 'CategoryS',
        itemTpl: [
            '<div>{category}<tpl if="count != \'\'"> ({count})</tpl></div>'
        ]
    },
    
    initialize: function() {
        this.config.title = 'CATEGORY';
        this.callParent();
    }

});