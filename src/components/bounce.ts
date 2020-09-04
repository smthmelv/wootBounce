// tslint:disable: no-console
// tslint:disable: variable-name
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Bounce extends Vue {

  private readonly radius = 40;
  private readonly height = 600;

  // The 0,0 coordinate is top left of the box
  // positive x is to the right
  // positive y is down
  //
  // (0,0)---------- x
  //   |
  //   |
  //   |
  //   |
  //   y

  private x: number = 300;
  private y: number = 560;

  private get circle(): Element {
    return this.$refs.circle as Element;
  }

  @Prop() private msg!: string;
  public mounted() {
    setInterval(this.bounce, 200);
  }

  public bounce() { // this gets called every x ms -> update the position iteratively
    console.log(`called bounce function`);
    console.log(`after ${this.y}`);
    this.x = this.getRandomX();
    this.y = this.getRandomY();
    console.log(`${this.x}`);
    console.log(`${this.y}`);
  }

  public getRandomX() {
    const randX = Math.floor(Math.random() * 560) + 40;
    const MAX: number = 560;
    const MIN: number = 40;

    if (randX > 560) {
      return MAX;
    } else if (randX < 40) {
      return MIN;
    } else {
      return this.x;
    }
  }

  public getRandomY() {
    return Math.floor(Math.random() * 1080) + 40;
  }

  public get cx() {
    return this.x.toString();
  }

  public get cy() {
    return this.y.toString();
  }


}
