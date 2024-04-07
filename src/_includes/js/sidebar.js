const time = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--time").split(/[A-Za-z]+/)[0])

const openSidebarButton = document.querySelector(".open-sidebar-button")
const closeSidebarButton = document.querySelector(".close-sidebar-button")

const siteSidebar = document.querySelector(".site-sidebar")
const sidebarLinks = siteSidebar.querySelectorAll("a")
const firstSidebarLink = sidebarLinks[0]
const lastSidebarLink = sidebarLinks[sidebarLinks.length - 1]

const openSidebar = () => {
    /* document.body.classList.add("sidebar-open") */
    siteSidebar.ariaExpanded = true
    openSidebarButton.ariaExpanded = true
    setTimeout(() => closeSidebarButton.focus(), time)

    /* add event listeners */
    closeSidebarButton.addEventListener("click", closeSidebar)
    document.addEventListener("keyup", closeSidebarOnEscape)
    document.addEventListener("click", closeSidebarOnClick)
    firstSidebarLink.addEventListener("keydown", cycleFocusToLastSidebarLink)
    lastSidebarLink.addEventListener("keydown", cycleFocusToFirstSidebarLink)
}

const closeSidebar = () => {
    /* document.body.classList.remove("sidebar-open") */
    siteSidebar.ariaExpanded = false
    openSidebarButton.ariaExpanded = false
    setTimeout(() => openSidebarButton.focus(), time)

    /* remove event listeners */
    closeSidebarButton.removeEventListener("click", closeSidebar)
    document.removeEventListener("keyup", closeSidebarOnEscape)
    document.removeEventListener("click", closeSidebarOnClick)
    firstSidebarLink.removeEventListener("keydown", cycleFocusToLastSidebarLink)
    lastSidebarLink.removeEventListener("keydown", cycleFocusToFirstSidebarLink)
}

const closeSidebarOnEscape = (e) => { if (e.key === "Escape") closeSidebar()}
const closeSidebarOnClick = (e) => { if (e.target === document.querySelector(".site-container")) closeSidebar()}

const cycleFocusToFirstSidebarLink = (e) => {
    if(e.key === "Tab" && !e.shiftKey) {
        e.preventDefault()
        firstSidebarLink.focus()
    }
}
const cycleFocusToLastSidebarLink = (e) => {
    if(e.key === "Tab" && e.shiftKey) {
        e.preventDefault()
        lastSidebarLink.focus()
    }
}

const closeSidebarOnClickLink = (e) => {
    e.preventDefault()
    closeSidebar()
    setTimeout(() => window.location.href = e.target.href, time)
}


/* event listeners */
openSidebarButton.addEventListener("click", openSidebar)