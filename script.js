//your code here
let imageContainer = document.querySelector('.flex')
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
function handleImage() {
	
}
	generateImage()
