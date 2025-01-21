export class MyClass {
  constructor(
    public a: number,
    public b: string,
  ) {
    // ignore
  }
}

export default class AppBoot {
  constructor(
    private readonly app: any,
    private readonly config: any,
  ) {}

  public async didLoad() {
    console.log(this.app, this.config);
  }
}

export class AppBoot2 {
  constructor(private readonly app: any) {}

  public async didLoad() {
    console.log(this.app);
  }
}
