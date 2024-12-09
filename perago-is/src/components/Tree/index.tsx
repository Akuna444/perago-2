"use client";

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleNodeExpansion } from "@/redux/features/treeSlice";
import { MdOutlineCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

interface TreeNodeProps {
  node: TreeNodeData;
}
export interface TreeNodeData {
  id: number;
  name: string;
  children: TreeNodeData[];
}
const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const collapsed = useSelector<RootState, boolean>(
    (state) => state.treeState[node.id] || false
  );
  const toggleExpand = () => {
    dispatch(toggleNodeExpansion(node.id));
  };
  const handleNodeClick = (id: number) => {
    router.push(`/role/${id}`);
  };
  return (
    <div className="pl-2 sm:pl-4 md:pl-6 relative">
      <div className="flex items-center gap-x-1 sm:gap-x-2 md:gap-x-4">
        {node.children.length > 0 ? (
          <span onClick={toggleExpand}>
            {collapsed ? <AiOutlinePlusSquare /> : <AiOutlineMinusSquare />}
          </span>
        ) : (
          <MdOutlineCircle />
        )}
        <span
          onClick={() => handleNodeClick(node.id)}
          className="cursor-pointer bg-white mb-2 py-1 px-3 w-[300px] border shadow text-sm font-semibold flex items-center gap-x-8"
        >
          {node.name}
          {node.children.length > 0 && (
            <span className="font-normal bg-primary text-white px-4 py-0.5 rounded-md">
              {node.children.length}
            </span>
          )}
        </span>
      </div>
      {!collapsed && (
        <div className="pl-8">
          {node.children.map((childNode, index) => (
            <div key={index}>
              <div className="absolute left-3.5 top-7 bottom-0 w-0.5 bg-secondary"></div>
              <TreeNode node={childNode} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
interface TreeProps {
  data: TreeNodeData;
}
const Tree: React.FC<TreeProps> = ({ data }) => {
  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      {" "}
      <TreeNode node={data} />
    </div>
  );
};
export default Tree;
