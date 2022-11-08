import httpStatus from 'http-status';
import ExtendableError from './extendable-error';
import Constants from '../../constants/index';

class Unauthorized extends ExtendableError {
  public statusCode: number;
  public originalErr: any;

  constructor(err = null) {
    super(Constants.errorMessages.UNAUTHORIZED);
    this.statusCode = httpStatus.UNAUTHORIZED;
    this.originalErr = err;
  }
}

export { Unauthorized };
