import React from 'react'
import { useEffect, useState } from 'react'

interface AutoSaveProps {
    data: any;
    saveInterval?: number; // milliseconds
    onSave: (data: any) => Promise<void>;
  }

const autoSave:React.FC<AutoSaveProps> = ({data, saveInterval, onSave})=> {
  return (
    <div>
      
    </div>
  )
}

export default autoSave
