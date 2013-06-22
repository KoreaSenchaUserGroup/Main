Ext.define('Garigori.controller.InitLoadData', {
    extend: 'Ext.app.Controller',
    
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
//				Ext.getStore("CategoryS").load();
//				Ext.getCmp("CategoryID").setStore("CategoryS");
			},
			this
		);
    }
});