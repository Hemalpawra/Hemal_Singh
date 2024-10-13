const girl=document.querySelector('.girl')
let num=0
const arr=['move_right','move_left']
function change(n){
	if(n==0){
		n=1
	}else{
		n=0
	}
	return n
}
setInterval(()=>{
	num=change(num)
	girl.setAttribute('style',`animation-name:${arr[num]};`)
},8000)