// 该文件用于存放所有的 API 接口
// 获取blogList
export const getBlogList = async (params = {}) =>{
  try{
    const quaryString = new URLSearchParams(params).toString();
    const res = await fetch(
      `http://localhost:3000/api/getList?${quaryString}`,{
        method: 'GET'
      }
    );
    return await res.json();
  }catch(e){
    console.log(e);
    throw e;
  }
}

// 获取blogDetail
export const getBlogDetail = async (id) =>{
  try{
    const res = await fetch(
      `http://localhost:3000/api/getDetail?id=${id}`,{
        method: 'GET'
      }
    );
    return await res.json();
  }catch(e){
    console.log(e);
    throw e;
  }
}