import { useState } from 'react'
import './styles.css'
export default function App() {
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
  })
  console.log(filter)
const handleChange = (e)=>{
if(e.target.name==='brightness') setFilter({...filter,brightness:e.target.value})
if(e.target.name==='contrast') setFilter({...filter,contrast:e.target.value})
if(e.target.name==='saturation') setFilter({...filter,saturation:e.target.value})


}
  /* Challenge

    Range input'ları henüz hiçbir şey yapmıyor. Sizin göreviniz bunları aşağıdaki gibi çalıştırmaktır: 
    
        1. Kullanıcı range input kaydırıcılarından birini her hareket ettirdiğinde, filter state nesnesindeki karşılık gelen değer, değişmeyen diğer iki değer korunarak input değeri olacak şekilde güncellenmelidir. 
           
        2. Filter state nesnesinin her güncellemesinde, --brightness, --contrast ve 
           --saturation görüntünün filter özelliklerini kontrol eden CSS değişkenleri, karşılık gelen filter state nesne özelliklerinin değerleri olacak şekilde güncellenmelidir. İlgili CSS, styles.css dosyasının 1-13 satırlarında bulunabilir. 
		                       
        3. Range input'larının başlangıç değerleri, filter state nesnesindeki karşılık gelen özelliklerinin başlangıç değerleri olmalıdır.   
		   
		4. Kodunuzu mümkün olduğunca DRY yapmaya çalışın
*/

  return (
    <div className='main-container'>
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className='image-container'>
        <img src='./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg'  style={{ filter: `brightness(${filter.brightness}) contrast(${filter.contrast}) saturate(${filter.saturation})`,
          }}/>
      </div>

      <form>
        <label>
          <input type='range' onChange={handleChange}  value={filter.brightness} name='brightness' min={0} max={2} step={0.1} />
          <span>Brightness</span>
        </label>

        <label>
          <input type='range'  onChange={handleChange} value={filter.contrast}  name='contrast' min={0} max={2} step={0.1} />
          <span>Contrast</span>
        </label>

        <label>
          <input type='range' onChange={handleChange}  value={filter.saturation}  name='saturation' min={0} max={2} step={0.1} />
          <span>Saturation</span>
        </label>
      </form>
    </div>
  )
}
