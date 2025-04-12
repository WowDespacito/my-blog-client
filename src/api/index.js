// 该文件用于存放所有的 API 接口
// 获取blogList
export const getBlogList = async () =>{
  try{
    const res = await fetch(
      `http://localhost:3000/api/getList`,{
        method: 'GET'
      }
    );
    return await res.json();
  }catch(e){
    console.log(e);
    throw e;
  }

}