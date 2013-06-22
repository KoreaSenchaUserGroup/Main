Ext.define('Garigori.controller.InitLoadData', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            coverflowv: 'coverflowv',
        }
    },
    
    /**
     * Category List 초기
     * Server에서 CategoryList와 VideList정보를 JSONp통신으로 불러와 LocalStorage에 저장 한다 
     */
    init: function() {
    	
    	// Server 로 부터 Category 정보 얻어오기 시작--------------------------
		// JSONp 통신
		var categoryStore = Ext.create("Ext.data.Store", {
			model : 'Garigori.model.CategoryM',
	        proxy: {
	            type: 'jsonp',
	            url: 'http://garigori.sencha.or.kr/json/ui/05_listAll.jsp?random='+Math.random(),
	            reader: {
	                type: 'json',
	                idProperty: 'id',
	                rootProperty: 'categoryList'
	            }
	        }
		});
		// LocalStorage 에 저장
		categoryStore.load(
			function(records, operation, success){
				categoryStore.getModel().setProxy({
					type : 'localstorage',
					id : "categoryLocalStorage"
				});
				
				for(var i = 0; i < categoryStore.getCount(); i++) {
					categoryStore.getAt(i).save();
				}
				Ext.getStore("CategoryS").load();
				Ext.getCmp("CategoryID").setStore("CategoryS")
			},
			this
		);
		
    	// Server 로 부터 Category 정보 얻어오기 끝--------------------------
    	
    	// Server 로 부터 Video List 정보 얻어오기 시작--------------------------

		// JSONp 통신
		var videoListStore = Ext.create("Ext.data.Store", {
			model : 'Garigori.model.SpeakerM',
	        proxy: {
	            type: 'jsonp',
	            url: 'http://garigori.sencha.or.kr/json/ui/05_listAll.jsp?random='+Math.random(),
	            reader: {
	                type: 'json',
	                rootProperty: 'videoList'
	            }
	        }
		});

		// LocalStorage 에 저장
		videoListStore.load(
			function(records, operation, success){
				videoListStore.getModel().setProxy({
					type : 'localstorage',
					id : "videoListLocalStorage"
				});
				for(var i = 0; i < videoListStore.getCount(); i++) {
					videoListStore.getAt(i).save();
				}
				Ext.getStore('speakerS').load();
				
				
				var coverFlowS = Ext.getStore("coverFlowS");
				console.log( coverFlowS.getCount() );
				coverFlowS.add(videoListStore.getAt(0));
				coverFlowS.add(videoListStore.getAt(1));
				coverFlowS.add(videoListStore.getAt(2));
				coverFlowS.add(videoListStore.getAt(3));
				coverFlowS.add(videoListStore.getAt(4));
				coverFlowS.add(videoListStore.getAt(5));
				coverFlowS.add(videoListStore.getAt(6));
				coverFlowS.add(videoListStore.getAt(7));
				coverFlowS.add(videoListStore.getAt(8));
				coverFlowS.add(videoListStore.getAt(9));
				coverFlowS.add(videoListStore.getAt(10));
				coverFlowS.add(videoListStore.getAt(11));
				coverFlowS.add(videoListStore.getAt(12));
				coverFlowS.add(videoListStore.getAt(13));
				console.log( coverFlowS.getCount() );
				
				//coverFlowS.load();
				console.log( coverFlowS.getCount() );


				
//				Ext.getStore("coverFlowS").sort();
//				Ext.getStore("coverFlowS").filter();
//				Ext.getStore("coverFlowS").load(); // CoverFlow Store Load() 한다. 안하면, 깨져서 보인다
				
//				var coverFlowS = Ext.getStore("coverFlowS");
//				videoListStore.getModel().setProxy({
//					type : 'localstorage',
//					id : "coverFlowLocalStorage"
//				});
//				console.log( coverFlowS.getCount() );
//				coverFlowS.removeAll();
//				console.log( coverFlowS.getCount() );
//				for(var i = 0; i < videoListStore.getCount(); i++) {
//					videoListStore.removeAt(i);
//				}
//				for(var i = 0; i < 3; i++) {
//					videoListStore.getAt(i).save();
//				}
//				coverFlowS.load(); // CoverFlow Store Load() 한다. 안하면, 깨져서 보인다
//				console.log( coverFlowS.getCount() );
			}
		);
    	// Server 로 부터 Video List 정보 얻어오기 끝--------------------------
		

    }


});