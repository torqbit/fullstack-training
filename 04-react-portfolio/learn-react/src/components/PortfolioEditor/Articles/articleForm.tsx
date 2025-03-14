import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArticleProps } from "./Article";
import {FC} from "react"



type ArticleFormType={
    name: string,
    blog:string,
    handleNameChange: (name: string) => void,
    handleBlogChange:(blog: string)=> void;
}

    export const Articleform:FC<ArticleFormType> =({name, blog, handleNameChange, handleBlogChange})=>{
    
        return(
            <form>
            <input
              type="text"
              name="title"
              placeholder="Enter your blog"
              value={blog}
              onChange={(e:any)=> handleBlogChange(e.currentTarget.value)}
              required/>
            <input
              type="text"
              name="Name"
              value={name}
              onChange={(e: any) => handleNameChange(e.currentTarget.value)}
              placeholder="Enter your Name"
    
              required/>
            </form>
        )
    }
            