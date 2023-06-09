import Card from "./Card";

const Cards = ({ courses}) => {

  const allCourses = [];

  const getCourses = ()=>{
    
      Object.values(courses).forEach((categoryInfo)=>{
        Object.values(categoryInfo).forEach((course)=>{
          allCourses.push(course);
        })
      })

      return allCourses;
    

  }
  return (
  <div className="w-[75%] grid grid-cols-3 mx-auto mt-10 gap-7 rounded-md">
  {
    getCourses().map((course, index)=>{
      return (
        <Card key={index} course={course}/>
      )
    })
  }
  </div>);
};

export default Cards;
