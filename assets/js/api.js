
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/matheusc-corp/dio-trilha-javascript-portfolio/refs/heads/main/assets/json/profile.json'
    const fetching = await fetch(url)

    return await fetching.json();
}