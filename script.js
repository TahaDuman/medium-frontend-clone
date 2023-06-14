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
            parentHeader.classList.add("bg-white")
            header.classList.add("bg-white")
            headerBtn.classList.add("bg-success")
            parentHeader.classList.remove("bg-warning")
            headerBtn.classList.remove("bg-black")
        } else{
            parentHeader.classList.remove("bg-white")
            header.classList.remove("bg-white")
            parentHeader.classList.add("bg-warning")
            headerBtn.classList.remove("bg-success")
            headerBtn.classList.add("bg-black")
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)