export function getLinksSaved(key) {
  const myLinks = localStorage.getItem(key)

  let linksSaved = JSON.parse(myLinks) || [];

  return linksSaved;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSaved(key)

  const hasLink = linksStored.some(link => link.id === newLink.id)

  if (hasLink) {
    return { success: false, message: "Este link já existe na sua lista" };
  }

  linksStored.push(newLink);
  localStorage.setItem(key, JSON.stringify(linksStored))

  return { success: true, message: "Link salvo com sucesso" };
}

export async function deleteLink(links, linkId) {

  let myLinks = links.filter(item => { return (item.id !== linkId) })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

  console.log("Link deletado com sucesso")

  return myLinks
}
