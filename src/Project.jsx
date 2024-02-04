export default function Project({title, link, images_desc, image_url}) {
  console.log(title, link, images_desc, image_url);
  return (
    <div className="card text-start">
        <img className="card-img-top" src={image_url} alt={images_desc} />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
        </div>
    </div>
  );
};
