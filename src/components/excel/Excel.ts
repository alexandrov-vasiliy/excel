import { ExcelComponent } from '../../core/ExcelComponent'

export interface IAppOtions {
  components: typeof ExcelComponent[]
}
export class Excel {
  private readonly $appElement: Element
  private components: typeof ExcelComponent[]
  public constructor (selector: string, options: IAppOtions) {
    this.$appElement = document.querySelector(selector)

    this.components = options.components || []
  }

  private getRoot(): HTMLElement {
    const $root = document.createElement('div')
    $root.classList.add('excel')
    this.components.forEach((Component) => {
      const $el = document.createElement('div')
      const component = new Component($el)
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }

  public render() {
    console.log(this.$appElement)
    this.$appElement.append(this.getRoot())
  }
}
