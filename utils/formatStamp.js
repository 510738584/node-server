function formatStamp(stamp, time = undefined){
  const date = new Date(+stamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2,'0');
  const day = (date.getDate()).toString().padStart(2,'0');
  let str = `${year}-${month}-${day}`;
  if(time){
    const hour = (date.getHours()).toString().padStart(2, '0');
    const min = (date.getMinutes()).toString().padStart(2, '0');
    const sec = (date.getSeconds()).toString().padStart(2, '0');
    str += ` ${hour}时${min}分${sec}秒`
  }
  return str;
}

formatStamp(16671823388888)