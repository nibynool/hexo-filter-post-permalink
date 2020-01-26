const defaultPermalinkFilter = require('hexo/lib/plugins/filter/post_permalink');

const newPermalinkFilter = (data) => {
    return data.custompermalink;
};

const postPermalink = (data) => {
    // Unregister the default permalink filter
    hexo.extend.filter.unregister(
        'post_permalink',
        defaultPermalinkFilter
    );
    // Unregister the custom permalink filter
    hexo.extend.filter.unregister(
        'post_permalink',
        newPermalinkFilter
    );

    if (typeof data.custompermalink !== 'undefined')
    {
        // Register the custom permalink filter
        hexo.extend.filter.register(
            'post_permalink',
            newPermalinkFilter
        );
    } else {
        // Register the default permalink filter
        hexo.extend.filter.register(
            'post_permalink',
            defaultPermalinkFilter
        );
    }
    return data;
};

hexo.extend.filter.register(
    'post_permalink',
    postPermalink,
    9
);