import { Request, Response } from 'express';
import { Controller } from '../Controller';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    
    const requestData = {
      body: request.body || {},
      params: request.params || {},
      query: request.query || {}
    };

    const httpResponse = await controller.handle(requestData);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return response.status(httpResponse.statusCode).json({ success: true, body: httpResponse.body });
    } else {
      let message = '';

      if (httpResponse.body.generic && httpResponse.body.err) {
        if (httpResponse.body.err.originalErr) {
          console.error(httpResponse.body.err.originalErr);
        }
        console.error(httpResponse.body.err.stack);
        console.error(httpResponse.body.err.message);

        message = httpResponse.body.generic.message;
      } else {
        let msg = '';
        if (httpResponse.body.originalErr) {
          msg = `${JSON.stringify(httpResponse.body.originalErr)} - ${httpResponse.body.originalErr.message}`;
          if (httpResponse.body.msgErr) {
            msg = `${msg} - ${httpResponse.body.msgErr}`;
          }
        }
        msg = `${msg} - ${httpResponse.body.message} - ${httpResponse.body.stack}`;
        console.error(msg);

        message = httpResponse.body.message;
      }

      return response.status(httpResponse.statusCode).json({
        success: false,
        message
      });
    }
  };
};
