"use client";

import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mantine/core";
import IoMdArrowBack from "@ant-design/icons";
import RoleDetail from "@/components/Role/RoleDetail";
import UpdateRole from "@/components/Role/UpdateRole";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { hideEdit } from "@/redux/features/roleEditSlice";
import { useRouter } from "next/navigation";

export default function Role({ params }: { params: { id: string } }) {
  const edit = useSelector((state: RootState) => state.roleEditState.edit);
  const dispatch = useDispatch();
  const router = useRouter();
  const id = params.id;
  return (
    <div className="p-4">
      <header className="py-4 px-3 h-20 bg-white text-2xl flex items-center justify-between font-bold mb-10 gap-x-4">
        <div className="flex items-center gap-x-3">
          <Button
            className="bg-gray-500"
            onClick={() => {
              router.back();
              dispatch(hideEdit());
            }}
          >
            <IoMdArrowBack />
            Back
          </Button>{" "}
          Roles Detail in Perago Information Systems
        </div>
        {edit && "Editing...."}
      </header>
      {!edit && <RoleDetail id={id} />}
      <UpdateRole id={id as string} />
    </div>
  );
}
