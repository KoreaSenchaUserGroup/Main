Ext.define('Garigori.view.speaker.ListV', {
    extend: 'Ext.dataview.List',
    alias: 'widget.speakerlistv',

    config: {
        title: 'list',
        store: 'speakerS',
        itemTpl: [
            '<div><div><img src="{thumbnail}" height="40" width="70" alt="alternative_text" style="float:left; padding-right: 10px;"></div><div>{title}</div></div>'
        ],
        items: [ {
            xtype: 'searchfield',
            placeHolder: 'Search...',
            hidden: true,
            itemId: 'sfSearch'
            /*listeners: {
                scope: this,
                clearicontap: this.onSearchClearIconTap,
                keyup: this.onSearchKeyUp
            }*/
        }
            ]
    },
    
    

});