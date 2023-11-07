import { categories, Category } from "../../Data/Data";
import "./category-item.style.scss";

const CategoryItem: React.FC = () => {

    return (
      <>
        {categories.map((category: Category, index: number) => (
          <div className="category-container" key={index}>
              <div className="background-image" style={{ backgroundImage: `url(${category.image})` }} />
              <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
              </div>
          </div>
        ))}
      </>
    );
  }
  
  export default CategoryItem;