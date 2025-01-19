//your code here
let clickedImage = []
let imageContainer = document.querySelector('.flex')
let reset = document.getElementById('reset')
let verify = document.getElementById('verify')
let para = document.getElementById('para')
function generateImage() {
	let images = ["img1", "img2","img3","img4","img5"]
	let repeatedIndex = Math.floor(Math.random()*5)
	let repeatedImage = images[repeatedIndex]

	let imageSet = [...images, repeatedImage].sort(()=>Math.random()-0.5)

	imageSet.forEach((imgClass, index)=>{
		let imgEle = document.createElement('img')
		imgEle.className = `${imgClass} img`
		imgEle.dataset.index = index
		imgEle.addEventListener('click', handleImage)
		imageContainer.append(imgEle)
	})
	
}
function handleImage(e) {
	let clickedIndex = e.target.dataset.index
	if(clickedImage.includes(clickedIndex)){
		return
	}
	clickedImage.push(clickedIndex)
	e.target.classList.add('selected')
	reset.style.display = "block"

	if(clickedImage.length ==2 ){
		verify.style.display = "block"
	}
}
reset.addEventListener('click', function (e) {
	document.querySelectorAll('img').forEach(img=>{
		img.classList.remove('selected')
	})
	clickedImage = []
	reset.style.display = "none"
	verify.style.display = "none"
	para.innerText = ""
})

verify.addEventListener('click', function(){
	if(clickedImage.length ===2){
	let firstImg = imageContainer.children[clickedImage[0]].className
	let secondImg = imageContainer.children[clickedImage[1]].className
	
	     if(firstImg == secondImg){
		para.innerText = "You are a human. Congratulations!."
	}
		else{
			para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
		}
	}
	clickedImage = []
	verify.style.display = 'none'
})
	generateImage()
