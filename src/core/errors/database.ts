import httpStatus from 'http-status';
import ExtendableError from './extendable-error';
import Constants from '../../constants/index';
import { buildMsgError } from '../../utils/general';


class DatabaseError extends ExtendableError {
  public msgErr: string;
  public originalErr: any;
  public statusCode: number;

  constructor(err: any, message: string = null) {
    super(Constants.errorMessages.GENERAL);
    this.originalErr = err;
    this.msgErr = buildMsgError(err, message);
    this.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  }
}

export { DatabaseError };
