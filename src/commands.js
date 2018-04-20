export default (editor, config = {}) => {
    var commands = editor.Commands;
    
    var getDocument = function(){
        var iframes = document.querySelectorAll("iframe.gjs-frame");
        
        if(iframes.length < 1){
            return document;
        }
        
        return iframes[0].contentDocument || iframes[0].contentWindow.document;
    };
    
    var getElementById = function(id){
        const doc = getDocument();
        if(!doc){
            console.error(`Document not found`);
        }
        return doc.getElementById(id);
    };
    
    
    commands.add('open-modal', {
        run: function (editor, senser, params) {
            const id = params.id;
            if(!id){
                console.error('The ID is missing');
                return;
            }
            
            let modal = getElementById(id);

            if(!modal){
                console.error(`Modal ${id} not found.`);
                return;
            }
            
            modal.setAttribute('class', `modal fade in`);
            modal.setAttribute('style', `display: block;`);
            
            console.log(`Modal ${id} pop ups`);
        },
        stop: function (e, s) {
        }
    });
}
