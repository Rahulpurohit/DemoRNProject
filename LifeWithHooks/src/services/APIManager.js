'use strict';

import {PropTypes} from 'prop-types';
import axios from 'axios';

type objType = PropTypes.func;

export default class APIManager {
  static API = axios.create({baseURL: 'https://api.myjson.com'});

  static handleResponse(promise: Promise, obj: objType): Promise {
    return promise;
  }

  static parseEndpoint(endPoint: string): string {
    return `${endPoint}`;
  }

  static get(endPoint: string, params = null): Promise {
    return this.API.get(this.parseEndpoint(endPoint), {params});
  }

  static getHandle(endPoint: string, obj: objType, param = null): Promise {
    const promise = this.get(endPoint, param);
    return this.handleResponse(promise, obj);
  }

  static post(endPoint: string, param = null): Promise {
    return this.API.post(this.parseEndpoint(endPoint), param, {
      'Cache-Control': 'no-cache',
    });
  }

  static postHandle(endPoint: string, param = null): Promise {
    const promise = this.post(endPoint, param);
    return this.handleResponse(promise);
  }

  static put(endPoint: string, param = null): Promise {
    return this.API.put(this.parseEndpoint(endPoint), param);
  }

  static putHandle(endPoint: string, obj: objType, param = null): Promise {
    const promise = this.put(endPoint, param);
    return this.handleResponse(promise, obj);
  }

  static delete(endPoint: string, param = null): Promise {
    return this.API.delete(this.parseEndpoint(endPoint), param);
  }

  static deleteHandle(endPoint: string, obj: objType, param = null): Promise {
    const promise = this.delete(endPoint, param);
    return this.handleResponse(promise, obj);
  }
}
