const applyChanges = () => {
    const url = window.location.hostname,
          text = document.getElementById('text'),
          title = document.querySelector('title');

    const domain = url.slice(0, url.indexOf(".vercel.app"))

    text.textContent = domain
    title.textContent = domain
}

window.onload = applyChanges()