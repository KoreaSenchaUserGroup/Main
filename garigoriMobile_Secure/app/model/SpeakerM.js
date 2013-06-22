
Ext.define('Garigori.model.SpeakerM', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'published'
            },
            {
                name: 'updated'
            },
            {
                name: 'title'
            },
            {
                name: 'content'
            },
            {
                name: 'link'
            },
            {
                name: 'favoriteCount'
            },
            {
                name: 'viewCount'
            },
            {
                name: 'thumbnail'
            },
            {
                name: 'thumbnail0'
            },
            {
                name: 'category'
            },
            {
            	name: 'isFavorite'
            }
        ]
    }
});