
function includeJs(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);
};

function inlcudeCss(url, callback, inputCallback){
    var link  = document.createElement('link');
    link.rel  = 'stylesheet/less';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    document.head.appendChild(link);
    link.onload = callback(inputCallback);
}