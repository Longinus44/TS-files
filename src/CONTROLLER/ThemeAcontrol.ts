
class ThemeAcontrol {
    defaultMethod() {
        return {
            text: `you ve reached the ${this.constructor.name} default method`
        }
    }
}
export default new ThemeAcontrol();

export function defaultMethod(): any {
    throw new Error("Function not implemented.");
}
