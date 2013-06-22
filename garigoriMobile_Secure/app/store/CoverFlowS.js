console.log('CoverFlowS Loaded');

Ext.define('Garigori.store.CoverFlowS', {
    extend: 'Ext.data.Store',
    //alias: 'widget.coverflows',

    requires: [
        'Garigori.model.SpeakerM'
    ],

    config: {
//        autoLoad: true,
        model: 'Garigori.model.SpeakerM',
        storeId: 'coverFlowS',
        remoteStore : true,
        remoteFilter: true,
        pageSize: 5,
        localProxy: {
            type : 'localstorage',
            id : "videoListLocalStorage"
        },
        remoteProxy: {
            type: 'jsonp',
            url: 'http://garigori.sencha.or.kr/json/ui/05_listAll.jsp?random='+Math.random(),
            reader: {
                type: 'json',
                rootProperty: 'videoList'
            }
        }
    },
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
    constructor : function() {
        var loaded;
        var me = this;

        this.callParent(arguments);

        if(localStorage.getItem('videoListLocalStorage')) {
            console.log('Set Local Proxy');
            me.setProxy(me.getLocalProxy());

            loaded = function() {
                for(var i = 10, len = me.getCount(); i < len; i++) {
                    me.removeAt(10);
                }
            }
        }else {
            console.log('Set Remote Proxy');
            me.setProxy(me.getRemoteProxy());

            loaded = function() {
                var len = me.getCount();
                var i;
                me.getModel().setProxy(me.getLocalProxy());
                for(i = 0; i < len; i++) {
                    me.getAt(i).save();
                }
                for(i = 10; i < len; i++) {
                    me.removeAt(10);
                }
            }
        }
        this.load(loaded);
    }
});