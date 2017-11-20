function preloadImages(array, progressCallback, finishedCallback) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    
    var list = preloadImages.list;
    var total = array.length;

    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);

                progressCallback.call(this, list.length);

                if(list.length == 0){
                    finishedCallback.call(this);
                }
            }
        }

        list.push(img);
        img.src = array[i];
    }
}

/*
function progress(value){
    var progress = Math.round(100 - value/imagesCollection.length*100);
    EventBus.dispatchEvent("PRELOAD_PROGRESS", progress);
}

function finished(){
    EventBus.dispatchEvent("PRELOAD_COMPLETE", null);
}
*/


