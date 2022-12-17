export default function VodApp(props) {
    const [ar, setAr] = useState([]);
    const [searchQ, setSearchQ] = useState('bank')
    const { year, searchP } = useParams();
    const nav = useNavigate();
    const [flag, setFlag] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        doApi()
    }, [])
  
    useEffect(() => {
        doApi()
    }, [searchP, year])
  
    const doApi = async () => {
        setLoading(true)
        setAr([])
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${searchP || "bank"}&y=${year}&apikey=95266e4d`)
        let temp_ar = data.Search || [];
  
        temp_ar = temp_ar.filter(temp_ar => temp_ar.Poster != 'N/A')
        setAr(temp_ar)
        setFlag(!temp_ar.length ? true : false)
        setLoading(false);
  
    }
    return (
        
        
        <div className='vodApp bg-dark '>
            <nav className='vodApp_nav d-flex justify-content-end position-absolute top-50 end-0 translate-middle-y'>
                
             
                <div className='col-md-3 mx-2 '>
                    <div className='float-end vodApp_inputDiv '>
                        <input onInput={(e)=> setSearchQ(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') { nav(`/search/${e.target.value||"bank"}`)} }} placeholder='Search...' className='vodApp_input col-md-15 col-10' type="text" /><FaSearch onClick={()=>nav(`/search/${searchQ}`)} style={{ cursor: 'pointer' }} className='text-white me-1' />
                    </div>
                    
  
                </div>
            </nav>