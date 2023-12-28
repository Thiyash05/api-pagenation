import React from "react";
import "./PageNation.css"


function PageNation({ totalPosts,postPerPage,setCurrentPage,currentPage}){
    let pages=[];
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
           pages.push(i)
    }
    return(
        <div >
             {
                pages.map((page,index)=>{
                    return(
                        <button
                        id="page-btn"
                        key={index}
                        onClick={()=>setCurrentPage(page)}
                        className={page==currentPage?"active":""}
                        >
                            {page}
                        </button>
                    )
                })
             }
        </div>
    )
}
export default PageNation;