import { getDocs, collection, getDoc, getFirestore, doc, query, where, addDoc } from "firebase/firestore";
import app from './init'
import app2 from './init2'
import bcrypt from 'bcrypt'
import { getDatabase, ref, child, get } from "firebase/database";
import { useRef, useState, useEffect } from "react";

const firestore = getFirestore(app)

export async function getData(path: any) {
    const database = getDatabase(app2);
    const rootRef = ref(database, path);
    
    try {
      const snapshot = await get(rootRef);
      const dbValue = snapshot.val();
      return dbValue;
    } catch (error) {
      console.error('Error getting data:', error);
      throw error;
    }
  }
export async function retrieveData(collectionName:string){
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
    return data
}

export async function retrieveDataById(collectionName:string, id:string){
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data()
    return data
}



export async function signIn(userData:{
    email:string;
}){
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
    if(data){
        return data[0]
    }
    else{
        return null
    }
}

export async function addArticles(userData:{
    title:string;
    content:string;
    name:string;
    create_at:string;
    image:string;
}, callback:Function){
    const q = query(collection(firestore, "articles"))
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
    if(!userData.title){
        callback({
            status:false,
            message:"Masukkan Judul"
        })
        return
    }
    if(!userData.content){
        callback({
            status:false,
            message:"Masukkan Konten"
        })
        return
    }
    
    await addDoc(collection(firestore, "articles"),userData)
    .then(res => {
        callback({
            status:true,
            message:"Berhasil menambahkan artikel"
        })
    })
    .catch(
        (error) => {
            callback({
                status:false,
                message:"Gagal menambahkan artikel"
            })
        }
    )
}
export async function addNews(userData:{
    title:string;
    content:string;
    name:string;
    create_at:string;
    image:string;
}, callback:Function){
    const q = query(collection(firestore, "news"))
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
    if(!userData.title){
        callback({
            status:false,
            message:"Masukkan Judul"
        })
        return
    }
    if(!userData.content){
        callback({
            status:false,
            message:"Masukkan Konten"
        })
        return
    }
    
    await addDoc(collection(firestore, "news"),userData)
    .then(res => {
        callback({
            status:true,
            message:"Berhasil menambahkan artikel"
        })
    })
    .catch(
        (error) => {
            callback({
                status:false,
                message:"Gagal menambahkan artikel"
            })
        }
    )
}
export async function signUp(userData:{
    email:string;
    name:string;
    password:string;
    c_password:string;
},callback:Function){

    if (!userData.email || !userData.name || !userData.password || !userData.c_password) {
        callback({
          status: false,
          message: "Semua kolom harus diisi"
        });
        return;
      }
    if(userData.password !== userData.c_password){
        callback({
            status:false,
            message:"Password dan Konfirmasi Password tidak sama"
        })
        return
    }
    if(userData.password.length < 8){
        callback({
            status:false,
            message:"Password minimal 8 karakter"
        })
        return
    }
    if(userData.email.split('@')[1] !== "aeli.or.id"){
        callback({
            status:false,
            message:"Email yang dimasukkan harus menggunakan domain aeli.or.id"
        })
        return
    }
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => (
        {
            id: doc.id,
        ...doc.data()

        }
    ))
    if (data.length > 0){
        callback({
            status:false,
            message:"Email sudah terdaftar"
        })
    }
    else{
        userData.password= await bcrypt.hash(userData.password, 10)
        userData.c_password = userData.password
        await addDoc(collection(firestore, "users"), userData)
        .then(res => {
            callback({
            status:true,
            message:"Berhasil mendaftar"
        })    
        })
        .catch(
            (error) => {
            callback({
                status:false,
                message:error.message
            }
        )
        })}
}