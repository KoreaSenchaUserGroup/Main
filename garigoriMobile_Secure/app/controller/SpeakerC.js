
Ext.define('Garigori.controller.SpeakerC', {
    extend: 'Ext.app.Controller',
    requires: ["Ext.field.Search"],
    
    config: {
        refs: {
            speakercardv: 'speakercardv',
            speakerlistv: 'speakerlistv',
            speakerdetailv: 'speakerdetailv',
            sfsearch: 'searchfield[itemId=sfSearch]',
            player: '#player'
        },

        control: {
            "speakerlistv": {
                itemtap: 'onListItemTap'
            },
            "searchfield[itemId=sfSearch]":{
            	clearicontap : 'onClearicontap',
            	keyup : 'onSearchKeyUp'
            },
            "speakercategoryv": {
                itemtap: 'onCategoryItemTap'
            },
            "speakerdetailv": {
            	tap: 'onSpeakerDetailTap',
            	activate : 'onSpeakerDetailActivate'
            },
            "speakercardv" : {
            	pop: 'onJabShareRecordPop',
            },
        }
    },
    
    onListItemTap: function(dataview, index, target, record, e, options) {
        if(!this.speakerdetailv){
            this.speakerdetailv = Ext.widget('speakerdetailv');
        }

        //this.speakerdetailv.setTitle(record.data.title);
        this.speakerdetailv.setRecord(record);
        
        this.speakerdetailv.currentVideoId = record.data.id; // Favorite Btn 에서 사용 할 값이다
        
        this.getSpeakercardv().push(this.speakerdetailv);
    },
    onClearicontap: function(){
    	var speakerStore = this.getSpeakerlistv().getStore();
    	// 필터 초기화
    	speakerStore.clearFilter();

    },
    onSearchKeyUp: function(field){
    	var value = field.getValue(),
    	speakerStore = this.getSpeakerlistv().getStore();
    	
    	// 필터 초기화
    	speakerStore.clearFilter();
    	
    	// 검색어로 카테고리 검색
    	var valueIdx = Ext.getStore('CategoryS').find('category', value);
    	// 검색어 - 카테고리 ID
    	var categoryId = null;
    	
    	if(valueIdx != -1){
    		categoryId = (Ext.getStore('CategoryS').getAt(valueIdx)).data.id;
    	}
        
        // 검색값이 있는 경우만
        if (value) {
        	// 공백으로 검색어를 구분(각 검색어를 or 조건으로)
        	var searches = value.split(' '),
        	regexps = [],
        	i;

        	// 검색어 loop
        	for (i = 0; i < searches.length; i++) {
        		//if it is nothing, continue
        		if (!searches[i]) continue;

        		// 정규식 생성
        		regexps.push(new RegExp(searches[i], 'i'));
        	}

        	// 스토어에 정규식-필터 적용
        	speakerStore.filter(function(record) {
        		var matched = [];

        		// 정규식 수 만큼 loop
        		for (i = 0; i < regexps.length; i++) {
        			var search = regexps[i];
        			var didMatch = null;

        			if(categoryId && record.get('category') != null){
        				didMatch = record.get('content').match(search) || record.get('title').match(search) || record.get('category').match(categoryId+'');
        			}else{
        				didMatch = record.get('content').match(search) || record.get('title').match(search);
        			}

        			// 정규식에 해당하는 record는 결과 배열에 추가
        			matched.push(didMatch);
        		}

        		// 찾은게 없으면 false 리턴
        		if (regexps.length > 1 && matched.indexOf(false) != -1) {
        			return false;
        		} else {
        			// 아니면 true 리턴
        			return matched[0];
        		}
        	});
        }
    },
    onCategoryItemTap: function(dataview, index, target, record, e, options) {
    	
        var speakerStore = Ext.getStore('speakerS');
        var categoryId = record.get('id');
        var categoryDesc = record.get('category');
        
        // 목록이 생성되지 않았으면 생성. Ext.create('widget.speakerlistv') 
        if(!this.speakerlistv){
            this.speakerlistv = Ext.widget('speakerlistv');
        }

        // 기존에 필터 제거
        speakerStore.clearFilter();

        if(categoryId != 1){
            speakerStore.filterBy(function(list){
                //console.log(categoryId, list.get('id'));
                
                // categoryId를 바로 사용하면 숫자형으로 처리되므로 비교가 안됨
            	return Ext.Array.contains(categoryId+"", list.data.category);
            });
        }

        this.speakerlistv.setTitle(categoryDesc);
        
        var searchField = this.getSfsearch();
        
        searchField.setHidden(categoryDesc == "전체보기" ? false:true);
        searchField.setValue("");
        
        // navigation에 push
        this.getSpeakercardv().push(this.speakerlistv);
    },
    onSpeakerDetailTap: function(e, target) {
    	
    	// Detail에서 image를 클릭하여 동영상 재생
    	// 동영상 재생에 필요한 javascript는 index.html에서 다운로드
    	if (target.id=='player') {
	  		var record = this.getSpeakerdetailv().getRecord();
	   		var videoId = record.get('id');
				player = new YT.Player('player', {
					height: '180',
					width: '320',
					videoId: videoId,
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
    	}else if(target.id=='favoriteMark'){
    		
    		var speakerStore = Ext.getStore("speakerS");
    		var videoId = this.getSpeakerdetailv().currentVideoId;
    		var idx = speakerStore.find('id', videoId);
        	
        	if(idx != -1){
        		var record = speakerStore.getAt(idx);
        		
        		// 즐겨찾기 제거
        		if(record.data.isFavorite){
        			speakerStore.getById(videoId).set("isFavorite", false);
        			
        		}else{ // 즐겨찾기 추가
        			speakerStore.getById(videoId).set("isFavorite", true);
        		}
        	}
    		
        	speakerStore.sync();
    		
    		// 목록 화면으로 이동
    		//this.getSpeakercardv().pop();
    		
    	}
    },
    onSpeakerDetailActivate: function(container, newActivateItem, oldActivateItem, options){
    	
    },
    onJabShareRecordPop: function() {
    	// list로 돌아갈 경우 기존 동영상 제거
    	if (player) {
			player.destroy();
		}
    },
});