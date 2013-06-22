
Ext.define('Garigori.view.favorites.CardV', {
    extend: 'Ext.navigation.View',
    alias: 'widget.favoritescardv',

    requires: [
        'Garigori.view.favorites.ListV'
    ],

    config: {
        autoDestroy: false,
        items: [
            {
                xtype: 'favoriteslistv'
            }
        ]
    },
    

});