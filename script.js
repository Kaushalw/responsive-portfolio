function send(e){
var name=document.getElementById('name').value;
var description=document.getElementById('descriptions').value;
var mail = document.getElementById('mail').value
        if ( document.getElementById('name'). value==='') {
                window.navigator.vibrate('200');

                alert('Enter something🔍');
        }
        else{
                window.open("https://wa.me/919811192234/?text= +
'Name:'+' '+name +
'                                                         '+" Email:"
+ mail+'                                    '+ description");
 

                
}
}
