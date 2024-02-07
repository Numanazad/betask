export class CreateItemDto {
    readonly name: string;
    readonly color: string;
    readonly length: number;
    readonly width: number;
    readonly height: number;
    readonly weight: number;
    readonly qty: number;
    readonly stackable: boolean;
    readonly tiltable: boolean;
  }
  