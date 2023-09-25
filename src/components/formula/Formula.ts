import { ExcelComponent } from '../../core/ExcelComponent'

export class Formula extends ExcelComponent{
  toHTML (): string {
    return `
    <div class="excel__formula">
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    </div>
    `
  }
}
