import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBIcon,
} from 'mdb-react-ui-kit'; // Import the necessary MDB components

const Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "The Making of India’s Constitution",
      url: "https://youtu.be/4tI4QXhzqNU?si=ZpVg35bUs8b3cNlm",
      thumbnail: "https://static.toiimg.com/thumb/msid-95779470,width-1070,height-580,imgsize-133314,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      description: "Making Of indian constitution"
    },
    {
      id: 2,
      title: "Preamble",
      url: "https://youtu.be/LYHAy68pQWA?si=foHZdOp2kUCAOCvr",
      thumbnail: "https://4.bp.blogspot.com/-t9wP5YGYBgA/VwZ7GV5Sb5I/AAAAAAAAE5I/FyBav527ouwDXt7SsV25HzaeMWuAXotVg/s400/Preamble-Indian-Constitution.png",
      description: "Preamble of indin constitution."
    },
    {
      id: 3,
      title: "Video Title 3",
      url: "https://www.youtube.com/watch?v=anotherVideoID",
      thumbnail: "https://img.youtube.com/vi/anotherVideoID/0.jpg",
      description: "Description of the third video."
    }
  ];
  

  return (
    <div className="gallery">
      {/* Carousel Section */}
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem className="active">
          <img
            src="https://education.sakshi.com/sites/default/files/images/2022/11/02/indian-constitution-1667394437.jpg"
            className="d-block w-100"
            alt="Sunset Over the City"
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <img
            src="https://media.indiatimes.in/media/content/2015/Apr/indian_constitution_1430203320.jpg"
            className="d-block w-100"
            alt="Canyon at Night"
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <img
            src="https://legalvidhiya.com/wp-content/uploads/2023/04/image-removebg-preview-8-2.png"
            className="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      {/* Video Gallery Section */}
      <h2 className="gallery-heading">Explore the Videos</h2>
      <div className="video-gallery" style={styles.videoGallery}>
        {videos.map((video) => (
          <div className="video-container" style={styles.videoContainer} key={video.id}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumbnail"
                style={styles.thumbnail}
              />
            </a>
            <h3 style={styles.videoTitle}>{video.title}</h3>
            <p style={styles.videoDescription}>{video.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div className="social-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="instagram" size="2x" className="me-3" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="facebook" size="2x" className="me-3" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="twitter" size="2x" className="me-3" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="linkedin" size="2x" className="me-3" />
          </a>
        </div>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} My Gallery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

// Inline styles for the component
const styles = {
  videoGallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '30px',
  },
  videoContainer: {
    margin: '10px',
    textAlign: 'center',
    width: '300px',
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  videoTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  videoDescription: {
    fontSize: '14px',
    color: '#555',
  },
  footer: {
    marginTop: '50px',
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  footerText: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Gallery;