import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      if (!videoUrl) {
        setVideoUrl(`${import.meta.env.BASE_URL}assets/${props.video}`);
      }
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noreferrer"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
        {isVideo && videoUrl && (
          <video src={videoUrl} autoPlay muted playsInline loop></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
