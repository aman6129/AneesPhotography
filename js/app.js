$(document).ready(function() {

    var files = [
        "DSC00047", "DSC00052", "DSC00054","DSC00103","DSC00211",
        "DSC00276","DSC00378","DSC00528","DSC00799", "DSC00927","DSC00942","DSC00945","DSC00951","DSC01021","DSC01039","DSC01048","DSC01075",
        "DSC01153","DSC01159", "DSC01281", "DSC01404", "DSC01455", "DSC01466", "DSC01478", "DSC01993", "DSC02000", "DSC02094", "DSC02161",
        "DSC02296", "DSC02393", "DSC02540", "DSC02601", "DSC02862", "DSC03098", "DSC03595", "DSC03602", "DSC03655", "DSC03668", "DSC03745",
        "DSC04448", "DSC04674", "DSC04850", "DSC05050", "DSC05441"
        ]

    for(var i = 0; i < files.length; ++i){
        console.log('Appending file ' + files[i]);
        var href = "assets/" + files[i] + ".JPG" //img files
        var src = "assets/tn/" + files[i] + "_tn.JPG" //tn files
        $(".content").append(
                "<a class='thumbnail-wrapper' href=" + href + "><img src=" + src + " class='thumbnail'></a>"
            )
    }
    $("#lightgallery").lightGallery({
         thumbnail: true
    }); 
});