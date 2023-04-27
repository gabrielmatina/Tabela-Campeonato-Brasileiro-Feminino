class UnprocessableError extends Error {
  public status: number;
  constructor(message = 'It is not possible to create a match with two equal teams') {
    super(message);
    this.status = 422;
  }
}

export default UnprocessableError;
