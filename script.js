function send(){
var name=document.getElementById('name').value;
var email=document.getElementById('mail').value;
var message=document.getElementById('descriptions').value;


 
 if (  name&&email&&message==='') {
                window.navigator.vibrate('200');

                alert('Enter something🔍');
        }
        else{
                window.location.href='https://wa.me/919811192234/?text='+'Hy'+ ' '+'I'+' '+'Am'+'Name:- '+name+'Email:- '+email.value +' '+message+'     '
        }

        console.log( name&&email&&message)
}