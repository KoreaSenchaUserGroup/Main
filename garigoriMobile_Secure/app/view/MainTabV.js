
Ext.define('Garigori.view.MainTabV', {
    extend: 'Ext.tab.Panel',
    
    xtype: 'mainTabV',

    requires: [
        'Garigori.view.home.MainV',
        'Garigori.view.speaker.CardV',
        'Garigori.view.favorites.CardV', 
        'Garigori.view.blog.MainV',
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        tabBar: {
            docked: 'bottom'
        },
        items: [
            {
                xtype: 'homemainv',
                title: 'HOME',
                iconCls: 'home'
            },
            {
                xtype: 'speakercardv',
                title: 'Speaker',
                iconCls: 'info'
            },
            {
                xtype: 'favoritescardv',
                title: 'Favorites',
                iconCls: 'user'
            },
            {
                xtype: 'blogmainv',
                title: 'Blog',
                iconCls: 'bookmarks'
            }
        ]
    }

});