var targeTime = new Date(2024, 12, 1, 25, )
        var heading = document.getElementById("heading")
        var day = document.getElementById("day")
        var hour = document.getElementById("hour")
        var minute = document.getElementById("minute")
        var second = document.getElementById("second")

        var center = document.querySelector(".center")
        var secondDiv = document.querySelector(".second-div")

        setInterval(() => {
            var currentTime = new Date ()
            var diff = targeTime - currentTime
            if(diff > 0){
                let num = parseInt(diff / (1000 * 60 * 60 * 24))

                if(num < 10)
                 day.innerHTML = `0${num}`
                else
                 day.innerHTML = num
                
                 num = parseInt((diff % (1000 *60 * 60 * 24)) / (1000 * 60 * 60))

                 if(num < 10)
                 hour.innerHTML = `0${num}`
                else
                hour.innerHTML = num
            
                num = parseInt((diff % (1000 * 60 * 60)) / (1000 * 60))
                
                if(num < 10)
                minute.innerHTML = `0${num}`
                else
                minute.innerHTML = num
             
                num = parseInt((diff % (1000 * 60)) / (1000))

                if(num < 10)
                second.innerHTML = `0${num}`
                else
                second.innerHTML = num
            }
            else{
                center.removeChild(secondDiv)
                heading.innerHTML = "Happy New Year 2025 "
            }
            },1000)