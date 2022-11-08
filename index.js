const p = document.querySelector(".answer")
const ans = document.querySelector(".ans")
const btn = document.querySelector(".btn")


document.addEventListener("DOMContentLoaded",  () => {
  btn.addEventListener("click", ()=> {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( showPosition)
    } else {
      p.innerHTML = "Your browser not sported geolocation."
    }
  })

  function showPosition(position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    console.log(typeof(latitude))
    p.innerHTML = "Latitude: --> " + latitude + "<br>" + "Longitude: --> " + longitude 

    latitude = latitude.toFixed(3)
    longitude = longitude.toFixed(3)
    console.log(latitude)
    if( latitude == 28.102 && (longitude == 75.826 || longitude == 75.827) ){
      ans.innerHTML = "You are in Library.  " + latitude +  "   " + longitude
    } else {
      ans.innerHTML = "You are not in Library." + latitude +  "   " + longitude
    }
  }
})