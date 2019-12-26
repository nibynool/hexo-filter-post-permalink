const permalinkFilter = (data) => {
    return data;
};

hexo.extend.filter.register(
    'post_permalink',
    function(data) {
        if (typeof data.custompermalink !== 'undefined')
        {
            // Unregister the default permalink filter
            hexo.extend.filter.unregister(
                'post_permalink',
                require('hexo/lib/plugins/filter/post_permalink')
            );
            // Register the custom permalink filter
            hexo.extend.filter.register(
                'post_permalink',
                permalinkFilter
            );

            return data.custompermalink;
        }

        // Unregister the custom permalink filter
        hexo.extend.filter.unregister(
            'post_permalink',
            permalinkFilter
        );
        // Register the default permalink filter
        hexo.extend.filter.register(
            'post_permalink',
            require('hexo/lib/plugins/filter/post_permalink')
        );

        return data;
    },
    9
);