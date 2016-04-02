var pswpElement = document.querySelectorAll('.pswp')[0];

// // build items array
var items = [
    {
        src: 'assets/DSC00031.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00047.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00052.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00054.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00057.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00103.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00211.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00214.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00276.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00378.JPG',
        w: 965.3,
        h: 645.3
    },
    {
        src: 'assets/DSC00385.JPG',
        w: 965.3,
        h: 645.3
    },
];

// // define options (if needed)

function expand(index){
    console.log("index to be displayed: " + index);

    var options = {
        history: false,
        focus: false,
        index: index
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    console.log(gallery.options.index)

}