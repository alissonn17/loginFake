import express from 'express';

export class User{
  // CONSTRUTOR DA CLASSE USER
    constructor(id,name,birthDate,email,cellphone,senha){
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.email = email;
        this.cellphone = cellphone;
        this.senha = senha;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};