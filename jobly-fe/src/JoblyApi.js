import React, { Component } from 'react';
import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = 'get') {
    console.debug('API Call:', endpoint, paramsOrData, verb);

    paramsOrData._token = localStorage.getItem('_token');

    // for now, hardcode token for "testuser"
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6' +
    // 'InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1N' +
    // 'jQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY';

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === 'get' ? 'params' : 'data']: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //static async getAll() {}
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }
  static async searchCompany(search) {
    let res = await this.request(`companies?search=${search}`);
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    console.log(res.jobs);
    return res.jobs;
  }
  static async searchJob(search) {
    let res = await this.request(`jobs?search=${search}`);
    return res.jobs;
  }

  // POST. Add a register method that posts to /users
  static async register(paramsOrData) {
    let res = await this.request('users', paramsOrData, 'post');
    return res.token;
  }

  // POST. Add a login method
  static async login(paramsOrData) {
    let res = await this.request('login', paramsOrData, 'post');
    return res.token;
  }
  //  static async request(endpoint, paramsOrData = {}, verb = 'get') {
  // need to add getJobs , getUsers, authUser
}

export default JoblyApi;
