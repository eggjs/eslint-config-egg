interface IFSMTransition<T extends string> {
  name: string;
  from: T[];
  to: T;
}

type IFSMTransitions<T extends string> = IFSMTransition<T>[];

export default IFSMTransitions;
