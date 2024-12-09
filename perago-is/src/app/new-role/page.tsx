"use client";

import { Button, Select, TextInput } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { TbPlus } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useAddRolesMutation, useGetAllRolesQuery } from "@/redux/services";
const schema = yup.object({
  name: yup.string().required("Role Name is required"),
  parentId: yup.string(),
  description: yup.string().required("Role Description is required"),
});

const roleToOptionFormatter = (
  roles: { id: number; name: string; description: string }[]
) => {
  const updatedRoles: any = roles.map(
    (role: { id: number; name: string; description: string }) => ({
      value: role.id.toString(),
      label: role.name,
    })
  );
  return updatedRoles;
};

export default function NewRole() {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [postRole] = useAddRolesMutation();
  const onSubmit: any = async (data: any) => {
    console.log(data);
    try {
      await postRole(data).unwrap();
      toast.success("New Role Added Successfully!");
      router.push("/");
    } catch (err) {
      console.log(data);
      if (err.data.statusCode === 409) return toast.error(data.message);
      toast.error("Failed to create role!");
    }
  };

  const [roles, setRoles] = useState<any>([]);

  const { data, isLoading, error } = useGetAllRolesQuery();

  useEffect(() => {
    if (!data) return;
    const formattedRoles = roleToOptionFormatter(data);
    setRoles(formattedRoles);
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to fetch</p>;
  }
  return (
    <div className="mt-10 ml-10">
      <header className="py-4 px-3 h-20 text-2xl flex items-center font-bold mb-10 gap-x-4">
        <TbPlus size={30} /> Add a New Roles for Perago Systems
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-8 gap-y-3 p-4 border w-1/3 mt-8 shadow bg-secondary"
      >
        <h2 className="px-5 py-1.5 border-b mb-4 text-xl font-semibold text-white">
          Role
        </h2>
        <div className="flex flex-col mx-8 gap-y-3 w-full text-white">
          <TextInput
            label="Role Name"
            placeholder="CEO"
            {...register("name")} // Updated field name for role name
            className="w-4/5"
            error={errors.name?.message}
          />
          <TextInput
            label="Description"
            placeholder="Chief Executive Officer"
            {...register("description")} // Updated field name for description
            className="w-4/5"
            error={errors.description?.message}
          />
          <Controller
            name="parentId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                label="Parent"
                placeholder="Pick a role to report to..."
                data={roles}
                value={field.value}
                onChange={(selected) => field.onChange(selected)}
                className="w-4/5"
                error={errors.parentId && <p>{errors.parentId.message}</p>}
              />
            )}
          />
          <Button
            variant="filled"
            className="bg-primary w-full self-end mr-24 mt-4"
            type="submit"
          >
            Add New Role
          </Button>
        </div>
      </form>
    </div>
  );
}
