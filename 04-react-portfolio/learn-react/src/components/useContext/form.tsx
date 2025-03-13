import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArticleProps } from "./Article";



type ArticleFormType={
    name: string,
    blog:string,
    handleNameChange: (name: string) => void,
    handleBlogChange:(blog: string)=> void;
}
    //const [loggedInUser, setLoggedInUser] = useState("")
    
//     const handleArticleSubmit = () => {
//       const articleStr = localStorage.getItem(`articles-${loggedInUser}`)
//       if(articleStr == null){
//         localStorage.setItem(`articles-${loggedInUser}`,JSON.stringify(userArticle))
//       } 
//       else {
//         const articlesArray= JSON.parse(articleStr)
//         articlesArray.push(userArticle)
//         localStorage.setItem(`articles-${loggedInUser}`,JSON.stringify(articlesArray))
//       }

//     const getCookie=(name: string)=> {
//         const cookies = document.cookie.split(";");
//         const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
//         return cookie ? cookie.split("=")[1] : null;
//       }
//       const router= useRouter()
      
//     const getRememberedUser =()=> {
//         const userEmail = getCookie("email");
        
//         if (userEmail) {
//         setLoggedInUser(userEmail)
//         return userEmail;
//         }
//         else{
//             router.push('/signup')
//         }
//         return null;
//       }

//     useEffect(() =>{
//        getRememberedUser();
//     }, []);

    return(
        <form>
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          value={userArticle?.title}
          onChange={(e: any) => {
            setUserArticle({...userArticle, title: e.currentTarget.value})
          }
        }
          required
        />
        <input
          type="text"
          name="blogImg"
          placeholder="Image Path"
          value={userArticle?.blogImg}
          onChange={(e: any) => {
            setUserArticle({...userArticle, blogImg: e.currentTarget.value})
          }
        }
          required
        />
        <input
          type="text"
          name="dateOfPublish"
          placeholder="Enter dateOfPublish"
          value={userArticle?.dateOfPublish}
          onChange={(e: any) => {
            setUserArticle({...userArticle, dateOfPublish: e.currentTarget.value})
          }
        }
          required
        />
        <input
          type="text"
          name=" category"
          placeholder="Enter the  category"
          value={userArticle?. category}
          onChange={(e: any) => {
            setUserArticle({...userArticle,  category: e.currentTarget.value})
          }
        }
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Enter the description"
          value={userArticle?.description}
          onChange={(e: any) => {
            setUserArticle({...userArticle, description: e.currentTarget.value})
          }
        }
          required
        />
        <input
          type="text"
          name="readLink"
          placeholder="Enter readLink"
          value={userArticle?.readLink}
          onChange={(e: any) => {
            setUserArticle({...userArticle, readLink: e.currentTarget.value})
          }
        }
        
        />
        <input
          type="text"
          name="linkLogo"
          placeholder="Enter linkLogo"
          value={userArticle?.linkLogo}
          onChange={(e: any) => {
            setUserArticle({...userArticle, linkLogo: e.currentTarget.value})
          }
        }
        
        />
       
        <button type="button">Submit</button>
      </form>
    )
}
export default ArticlePage
