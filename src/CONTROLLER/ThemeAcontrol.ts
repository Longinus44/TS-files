
class ThemeAcontrol {
    defaultMethod() {
        return {
            text: 'you ve reached the ${this.constructor.name} default method'
        }
    }
}
export = new ThemeAcontrol();