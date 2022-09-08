import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetail } from '../../store/actions/detail.action';
import { Table } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Detail = () => {

  const params = useParams();
  const dispatch = useDispatch();
 
   const { userDetailData={} } = useSelector((state) => state.detailReducer)

  useEffect(() => {
    dispatch(userDetail(params?.id));
  }, []);
  console.log(userDetailData?.data?.data)

   return (

  <div>

  <div class="container mt-10">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="main-heading text-center">user Detail</h1>
            <div className='profole-image text-center'>
            < img src={userDetailData?.data?.data?. avatar}class="rounded-circle"/>
            </div>
            <form method="POST" action="submit.php">
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"><b>Email Address</b></label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control " name="email" value={userDetailData?.data?.data?.email}required autocomplete="email"readOnly />
                </div>
              </div>
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"><b>first_name</b></label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control " name="email" value={userDetailData?.data?.data?.first_name}required autocomplete="email"readOnly />
                </div>
              </div>
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"><b>last_name</b></label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control " name="email" value={userDetailData?.data?.data?.last_name}required autocomplete="email"readOnly />
                </div>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
  )

  
}

export default Detail