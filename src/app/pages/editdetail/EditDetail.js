import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetail } from '../../store/actions/detail.action';
import { editdetail } from '../../store/actions/editdetail.action';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap';



const EditDetail = () => {
const params = useParams();
const dispatch = useDispatch();
const  editData= {}   = useSelector((state) => state.editdetailReducer)

  useEffect(() => {
    dispatch(editdetail(params?.id));
  }, []);
  console.log(editData.data)
  const { userDetailData={} } = useSelector((state) => state.detailReducer)

  useEffect(() => {
    dispatch(userDetail(params?.id));
  }, []);
  console.log(userDetailData?.data?.data,"nnnnnnnnnnnnnnnn")




  return (

    <div>
      <div class="container mt-10">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="main-heading text-center">Edit Detail </h1>
            <div className='profole-image text-center'>
            < img src={userDetailData?.data?.data?. avatar}class="rounded-circle"/>
            </div>
            <form >
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"><b>Email Address</b></label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control " name="email" value={userDetailData?.data?.data?.email} />
                </div>
              </div>
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"><b>first_name</b></label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control " name="email" value={userDetailData?.data?.data?.first_name}/>
                </div>
              </div>
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"><b>last_name</b></label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control " name="email" value={userDetailData?.data?.data?.last_name} />
                </div>
                <div>

                  <button type="submit" class="btn btn-primary py-1 px-4 "style={{position:'relative',bottom:'20px',right:'-220px',marginTop:'70px'}}>
                    Edit
                  </button>
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
export default EditDetail