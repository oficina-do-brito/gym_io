export class CreateAuthDto {
  constructor(
    private readonly id: number,
    private readonly nome: string,
    private readonly email: string,
    private readonly status: string,
    private readonly dataNascimento: Date,
  ) {}
}
