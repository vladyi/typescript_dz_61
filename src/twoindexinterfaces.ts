interface BaseIndexSignature {
    [key: string]: string | number;
  }
  
  interface ExtendedInterface extends BaseIndexSignature {
    id: number;
    name: string;
  }
  