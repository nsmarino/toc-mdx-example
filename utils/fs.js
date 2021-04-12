import fs from 'fs'
import path from 'path'

export function getIdsFromDirectory(dir) {
  const directory = path.join(process.cwd(), dir)

  const fileNames = fs.readdirSync(directory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, '')
        }
      }
    })
  }

export async function getFileContents(dir, id) {
  const fullPath = path.join(dir, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  return fileContents
}

