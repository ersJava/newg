module.exports = {
    plugins: [
        'gatsby-plugin-sass',

        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                    resolve: "gatsby-remark-embed-video",
                    options: {
                        width: 800,
                        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                        height: 400, // Optional: Overrides optional.ratio
                        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                        noIframeBorder: true //Optional: Disable insertion of <style> border: 0
                    }
                }
                ]
            }
        },
    ]
}