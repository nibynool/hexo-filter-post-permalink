const defaultPermalinkFilter = require('hexo/lib/plugins/filter/post_permalink');

const newPermalinkFilter = (data) => {
    return data;
};

const postPermalink = (data) => {
    if (typeof data.custompermalink !== 'undefined')
    {
        // Unregister the default permalink filter
        hexo.extend.filter.unregister(
            'post_permalink',
            defaultPermalinkFilter
        );
        // Register the custom permalink filter
        hexo.extend.filter.register(
            'post_permalink',
            newPermalinkFilter
        );

        return data.custompermalink;
    }

    // Unregister the custom permalink filter
    hexo.extend.filter.unregister(
        'post_permalink',
        newPermalinkFilter
    );
    // Register the default permalink filter
    hexo.extend.filter.register(
        'post_permalink',
        defaultPermalinkFilter
    );

    return data;
};

hexo.extend.filter.register(
    'post_permalink',
    postPermalink,
    9
);