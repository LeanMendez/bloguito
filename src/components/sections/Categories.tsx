import Pill from '../ui/Pills'
import { IArticle, IFrontmatter } from '@/types'

interface ICategories {
  categories: string[];
}

const Categories:React.FC<ICategories> = ({categories}) => {
  return (
    <>
    <h3 className={`text-2xl font-medium text-secondary-300 uppercase my-4`}>Categorías</h3>
    <div className={`flex gap-2 flex-wrap max-w-[280px]`}>
      {categories && categories.map((item)=> (<Pill key={item} str={item} />))}
    </div>
    </>
    
  )
}

export default Categories
