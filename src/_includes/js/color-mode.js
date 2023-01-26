// note: setColorMode defined in document head
function toggleColorMode() {
    document.documentElement.dataset.colorMode === "dark" ? setColorMode("light") : setColorMode("dark")
}