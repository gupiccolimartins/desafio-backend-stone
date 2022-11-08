import httpStatus from 'http-status';
import ExtendableError from './extendable-error';
import Constants from '../../constants/index';

class BusinessError extends ExtendableError {
  public statusCode: number;

  constructor(message: string = null, statusCode: number = null) {
    super(message || Constants.errorMessages.GENERAL);
    this.statusCode = statusCode || httpStatus.BAD_REQUEST;
  }
}

export { BusinessError };
