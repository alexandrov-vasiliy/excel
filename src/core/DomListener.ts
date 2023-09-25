export abstract class DomListener {
  private $root: HTMLElement
  public constructor ($root: HTMLElement) {
    if(!$root) {
      throw new Error('no $root provided for DomListener')
    }
    this.$root = $root
  }
}
