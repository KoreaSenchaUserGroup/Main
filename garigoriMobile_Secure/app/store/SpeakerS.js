
Ext.define('Garigori.store.SpeakerS', {
    extend: 'Ext.data.Store',

    requires: [
        'Garigori.model.SpeakerM'
    ],

    config: {
        autoLoad: true,
        model: 'Garigori.model.SpeakerM',
        storeId: 'speakerS',
        proxy: {
			type : 'localstorage',
			id : "videoListLocalStorage"
        }
    }
});