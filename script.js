const header = document.getElementById("header")
const parentHeader = document.getElementById("parent-header")
const headerBtn = document.getElementById("header-btn")
const sectionOne = document.getElementById("background-section")

const sectionOneOptions = {
    rootMargin: "-80px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting == false){
            header.classList.add("nav-scrolled")
            parentHeader.classList.remove("bg-warning")
            parentHeader.classList.add("bg-white")
            headerBtn.classList.remove("bg-black")
            headerBtn.classList.add("bg-success")
        }
        if(entry.isIntersecting == true){
            header.classList.remove("nav-scrolled")
            parentHeader.classList.add("bg-warning")
            parentHeader.classList.remove("bg-white")
            headerBtn.classList.add("bg-black")
            headerBtn.classList.remove("bg-success")
        }
        console.log(entry.isIntersecting)
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)