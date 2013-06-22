
Ext.define('Garigori.view.speaker.CardV', {
    extend: 'Ext.navigation.View',
    alias: 'widget.speakercardv',

    requires: [
        'Garigori.view.speaker.CategoryV'
    ],

    config: {
        autoDestroy: false,
        items: [
            {
                xtype: 'speakercategoryv'
            }
        ]
    }

});