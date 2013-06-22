Ext.define('Garigori.store.CoverFlowS', {
    extend: 'Ext.data.Store',

    requires: [
        'Garigori.model.SpeakerM'
    ],

    config: {
        autoLoad: true,
        model: 'Garigori.model.SpeakerM',
        storeId: 'coverFlowS',
        remoteStore : true,
        remoteFilter: true,
//        pageSize: 5,
//        proxy: {
//			type : 'localstorage',
//			id : "coverFlowLocalStorage"
//        },
        sorters: [
	        {
	            property : "title",
	            direction: "ASC"
	        },
	        {
	            property : "published",
	            direction: "DESC"
	        },
	        {
	            property : "updated",
	            direction: "DESC"
	        }
	    ],
    }
});