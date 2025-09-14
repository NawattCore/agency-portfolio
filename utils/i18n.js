
import fs from 'fs'
import path from 'path'

export async function loadTranslations(locale='en') {
  try {
    const file = path.join(process.cwd(), 'locales', `${locale}.json`)
    const raw = fs.readFileSync(file, 'utf-8')
    return JSON.parse(raw)
  } catch (e) {
    return {}
  }
}
