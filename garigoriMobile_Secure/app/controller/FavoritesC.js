Ext.define('Garigori.controller.FavoritesC', {
    extend: 'Ext.app.Controller',
    requires: ["Ext.MessageBox"],

    config: {
        refs: {
        	favoritescardv: 'favoritescardv',
            favoriteslistv : 'favoriteslistv',
            favoritesdetailv : 'favoritesdetailv',
            player2: '#player2'
        },

    control: {
            "button[itemId=removeFavoriteBtn]": {
                tap: 'onRemoveFavoriteBtnTap'
            },
            
            "favoritescardv":{
            	activate: 'onFavoritescardvActivate',
            	pop: 'onMyPageRecordPop',
            },
            
            "favoriteslistv": {
            	itemtap: 'onListItemTap'
            },
            "favoritesdetailv": {
            	tap: 'onMyPageDetailTap'
            },
        }
    },
    
    onListItemTap: function(dataview, index, target, record, e, options) {
    	
    	if(!this.favoritesdetailv){
            this.favoritesdetailv = Ext.widget('favoritesdetailv');
        }

        //this.favoritesdetailv.setTitle(record.data.title);
        this.favoritesdetailv.setRecord(record);
        
        this.favoritesdetailv.currentVideoId = record.data.id; // Favorite Btn 에서 사용 할 값이다
        
        this.getFavoritescardv().push(this.favoritesdetailv);
    	
    },
    
    onFavoritescardvActivate: function(container, newActiveItem, oldActiveItem, options) {
    	
    	// 임시 store
    	var favoriteStore = Ext.create("Ext.data.Store",{
    		model : 'Garigori.model.SpeakerM',
    		storeId : 'favoritesS'
    	});
    	
    	// 즐겨찾기 마킹된 데이터
    	var result = Ext.getStore('speakerS').queryBy(function(record){
    		
    		if(record.data.isFavorite == true){
    			//console.log('hit', record);
    			return true;
    		}
    	});
    	
    	//데이터 적용
    	result.each(function(item, index, length){
    		favoriteStore.add(item.data);
    		//console.log(index,item);
    	}, this);
    	
    	// 리스트에 스토어 세팅
    	this.getFavoriteslistv().setStore(favoriteStore);
    	
    },
    onRemoveFavoriteBtnTap: function(obj, e, eOpts) {
    	
    	var speakerStore = Ext.getStore("speakerS");
		var id = this.getFavoritesdetailv().currentVideoId;
		speakerStore.getById(id).set("isFavorite", false);
		speakerStore.sync();
		
		// 즐겨찾기에서 제거
		var favoritesStore = Ext.getStore('favoritesS');
		
		if(favoritesStore){
			var removeRecord = favoritesStore.findRecord('id', id);
			favoritesStore.remove(removeRecord);
		}
		
		// 목록 화면으로 이동
		this.getFavoritescardv().pop();
    },
    onMyPageDetailTap: function(e, target) {
    	// Detail에서 image를 클릭하여 동영상 재생
    	// 동영상 재생에 필요한 javascript는 index.html에서 다운로드
    	if (target.id=='player2') {
	  		var record = this.getFavoritesdetailv().getRecord();
	   		var videoId = record.get('id');
				player2 = new YT.Player('player2', {
          height: '180',
          width: '320',
          videoId: videoId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }else if(target.id=='favoriteMark2'){
  		
    	var speakerStore = Ext.getStore("speakerS");
  		var id = this.getFavoritesdetailv().currentVideoId;
  		speakerStore.getById(id).set("isFavorite", false);
  		speakerStore.sync();
  		
  		// 즐겨찾기에서 제거
  		var favoritesStore = Ext.getStore('favoritesS');
  		
  		if(favoritesStore){
  			var removeRecord = favoritesStore.findRecord('id', id);
  			favoritesStore.remove(removeRecord);
  		}
  		
  		// 목록 화면으로 이동
  		this.getFavoritescardv().pop();
  		
  		}
    },
    onMyPageRecordPop: function() {
    	// list로 돌아갈 경우 기존 동영상 제거
    	if (player2) {
			player2.destroy();
		}
    	
    	//if(Ext.getStore('favoriteS'))
    	//	Ext.getStore('favoriteS').load();
    }


});