import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
const OrgChart = () => (
  <div className='flex w-full justify-center'>
  <Tree label={<div className='font-bold border rounded-xl'>Nurfahmi</div>}>
    <TreeNode label={<div>Gigih Gesang</div>}>
    </TreeNode>
    <TreeNode label={<div>TreeNode Baru</div>}></TreeNode>
    <TreeNode label={<div>Jepih Nurhadi</div>}>
    </TreeNode>
  </Tree>

  </div>
  
);

export default OrgChart