"use client";

import React, { useEffect, useState } from "react";
import Tree from "@/components/Tree";
import axios from "axios";
import { TbListTree, TbPlus } from "react-icons/tb";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TreeNodeData } from "@mantine/core";
import { useGetRoleHierarchyQuery } from "@/redux/services";

const Roles = () => {
  const router = useRouter();
  const { data: roles, isLoading, error } = useGetRoleHierarchyQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>failed to fetch</p>;
  }

  return (
    <div className="flex flex-col mt-10 ml-20 h-[70vh]">
      <header className="py-4 px-3 h-20 bg-white text-2xl font-bold mb-10 gap-x-4 flex items-center justify-between">
        <span className="flex items-center gap-x-4">
          <TbListTree size={30} /> List of Roles for Perago Systems
        </span>
        <TbPlus
          onClick={() => router.push("/new-role")}
          className="cursor-pointer hover:text-blue-500"
        />
      </header>
      <div className="ml-10">
        {roles ? (
          <Tree data={roles as TreeNodeData} />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h2>There are no roles registered</h2>
            <button
              className="px-3 py1.5 bg-green-500 border text-white"
              onClick={() => router.push("/new-role")}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roles;
