
Ext.define('Garigori.view.favorites.ListV', {
    extend: 'Ext.dataview.List',
    alias: 'widget.favoriteslistv',

    config: {
        title: 'Favorites',
        store: 'speakerS',
        itemTpl: [
            '<div><div><img src="{thumbnail}" height="40" width="70" alt="alternative_text" style="float:left; padding-right: 10px;"></div><div>{title}</div></div>'
        ],
        emptyText:'<div style="padding: 20px">즐겨찾기된 항목이 없습니다.<br>Speaker에서 즐겨찾기를 추가해 보세요 :-)</div>'
    }

});