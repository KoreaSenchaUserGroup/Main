Ext.define('Garigori.controller.HomeC', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            homemainv: 'homemainv'
        },

        control: {
            "homemainv button[id=infoBtn]": {
                tap: 'onInfoBtnTap'
            }
        }
    },
    
    onInfoBtnTap: function(obj, e, eOpts) {
    		Ext.Msg.alert("Garigori", " 가리고리는 같이의 순 우리말 '가리'와 '고리'의 합성어로 직업선택에서 겪는 어려움을 사람과 사람의 연결로써 해결하고자 하는 프로젝트 입니다. http://garigori.net", Ext.emptyFn);
    }
});