const searchForm = document.querySelector("#search-form")
const searchResultsSection = document.querySelector("#search-results")

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const formData = new FormData(searchForm)

    // todo: handle multiple-word search query
    const query = formData.get("search").toLowerCase()

    if(query.length <=0) { return }
    
    // get condensed posts from search.json: 
    const posts = await getPosts()

    // filter by search query
    const filteredPosts = filterPosts(posts,query)
    
    if(filteredPosts.length <= 0) {
        searchResultsSection.innerHTML = `Nothing matched your search query "${query}." Try again?`
        return
    }

    // sort posts by date in descending order
    const sortedPosts = sortPosts(filteredPosts)

    // format into article template
    const formattedPosts = sortedPosts.map(formatPost).join("")
    
    // display formatted posts
    searchResultsSection.innerHTML = formattedPosts    
})

async function getPosts() {
    try {
        const res = await fetch("/search.json")
        if(!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        return data.search
    }
    catch(error) {
        console.log(error)
        return error.message
    }
}


function filterPosts(posts, query) {
    //const queryArray = query.split(" ")
    //let filteredPosts

    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(query) || post.tags.includes(query) || post.excerpt.includes(query) || post.text.includes(query))
    return filteredPosts
}

function sortPosts(posts) {
    const sorted = posts.slice().sort((a,b) => {
        const bDate = new Date(b.date)
        const aDate = new Date(a.date)
        return bDate - aDate
    })
    return sorted
}

function formatPost(post) {
    return `<article><h2 class="post-title"><a href="${post.url}">${post.title}</a></h2><p class="post-excerpt">${post.excerpt}</p></article>`
}
