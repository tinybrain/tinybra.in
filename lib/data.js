import rawdata from './navdata.yaml'

const addLinks = (item, index, siblings, parent = {}) => { // eslint-disable-line no-unused-vars
  const links = item
  const { path, linkSiblings } = parent

  if (path) links.parent = path

  if (linkSiblings) {
    links.prev = siblings[(index - 1 + siblings.length) % siblings.length].path
    links.next = siblings[(index + 1) % siblings.length].path
  }
  return Object.assign(links, item)
}

// recursively traverse navdata and populate with addLinks()

const buildLinks = (data, parent) => { // eslint-disable-line no-unused-vars
  const l = data.map((item, index, siblings) => {
    const tl = addLinks(item, index, siblings, parent)
    if (item.children) {
      tl.children = buildLinks(item.children, item)
    }
    return tl
  })
  return l
}

// recursively map nav routes for quick lookup

const buildMap = (data) => {
  const reduceNavData = (map, item, index) => {
    const tmap = map
    tmap[item.path] = Object.assign({ index }, item)

    let cmap
    if (item.children) {
      cmap = item.children.reduce(reduceNavData, tmap)
    }

    return Object.assign({}, tmap, cmap)
  }

  return data.reduce(reduceNavData, {})
}


export const navdata = buildLinks(rawdata)
export const navmap = buildMap(navdata)

export const slashless = (str) => {
  if (str.endsWith('/') && str.length > 1) {
    return str.substr(0, str.length - 1)
  }
  return str
}

export default { navdata, navmap, slashless }
