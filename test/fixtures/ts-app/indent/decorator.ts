function Test() {
  return () => {
    console.log('');
  };
}
function Body() {
  return () => {
    console.log('');
  };
}
function Query() {
  return () => {
    console.log('');
  };
}

export class SomeController {
  @Test()
  key: string;

  async doSomething(
    @Body() body: any,
    @Query() query: any,
  ): Promise<unknown> {
    console.log(body);
    console.log(query);
  }

  // TODO: need to support
  // async doSomething2(
  //   @Body() body: any,
  //   query: any,
  // ): Promise<unknown> {
  //   console.log(body);
  //   console.log(query);
  //   console.log(query2);
  // }

  async switchcase(sth: string) {
    switch (sth) {
      case '1':
        console.log(true);
        break;
      case '2':
        console.log(false);
        break;
      default:
    }
  }
}
