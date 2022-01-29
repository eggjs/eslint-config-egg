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
}
