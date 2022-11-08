import httpStatus from 'http-status';
import ExtendableError from './extendable-error';
import Constants from '../../constants/index';
import { buildMsgError } from '../../utils/general';

class ExternalError extends ExtendableError {
  public msgErr: string;
  public originalErr: any;
  public statusCode: number;

  constructor(err: any, message: string = null) {
    super(message || Constants.errorMessages.GENERAL);
    this.originalErr = err;
    this.msgErr = buildMsgError(err);
    this.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  }
}

export { ExternalError };
