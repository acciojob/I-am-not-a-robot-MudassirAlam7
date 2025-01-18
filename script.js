//your code here
let clickedImage = []
    let imgCon = document.querySelector('.image-container')
    let verify = document.getElementById('verify')
    let reset = document.getElementById('reset')
    let para = document.getElementById('para')
    function generateimage(){
        const image = ["img1", "img2","img3","img4","img5" ]
        repeatedImgIndex = Math.floor(Math.random()*5)
        repeatedImg = image[repeatedImgIndex]
        let imageSet = [...image, repeatedImg].sort(()=>Math.random()-0.5)
        imgCon.innerHTML = ""
        // console.log(imageSet);
        imageSet.forEach((imgClass, index)=>{
            let imgElement = document.createElement('img')
            imgElement.className = `${imgClass} img `
            imgElement.dataset.index = index
            imgElement.addEventListener('click', handleImage )
            // console.log(imgElement);
            
            imgCon.append(imgElement)
        })
        
    }
    function handleImage(e){
        e.target.classList.add('selected')
        let clickedindex =  e.target.dataset.index
        if(clickedImage.includes(clickedindex)){
            return
        }        
        clickedImage.push(clickedindex)
        reset.style.display = "block"
        
        console.log(clickedImage);
        

        if(clickedImage.length ===2){
            verify.style.display = "block"
        }

    }
    reset.addEventListener('click', function(e){

        clickedImage = []
        reset.style.display = "none"
        verify.style.display = "none"
        document.querySelectorAll('img').forEach(img=>{
            img.classList.remove('selected')
        })

    })
    verify.addEventListener('click', function(){
        verify.style.display = "none"
        let [first, second] = clickedImage
        let firstImg = imgCon.children[first].className
        let secondImg = imgCon.children[second].className

        if(firstImg == secondImg){
            para.innerText = 'You are a human. Congratulations!'

        }
        else{
            para.innerText = "We can't verify as a human. you selected the non identical tiles"
        }
    })
    
    generateimage()