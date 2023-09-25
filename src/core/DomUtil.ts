class DomUtil {
  private el: HTMLElement
  constructor (selector: string | HTMLElement) {
    if(typeof selector === 'string') {
      this.el = document.querySelector(selector)
    } else {
      this.el = selector
    }
  }

  public html(html?: string): string | DomUtil {
    if(html) {
      this.el.innerHTML = html
      return this
    }
    return this.el.outerHTML.trim()
  }

  public clear(): this {
    this.html('')
    return this
  }
}

export function $(selector: string | HTMLElement) {
  return new DomUtil(selector)
}

$.create = (tagName: string, classes = ''): DomUtil => {
  const el = document.createElement(tagName)
  if(classes) {
    el.classList.add(classes)
  }
  return $(el)
}
