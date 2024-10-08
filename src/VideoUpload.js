import React, { useState } from "react";
import { storage, db } from "./firebase";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import the necessary functions

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState(""); // Success message state
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return; // Ensure both file and title are provided

    const storageRef = ref(storage, `videos/${file.name}`);
    // Create a reference to the storage location
    try {
      await uploadBytes(storageRef, file); // Upload the file
      const url = await getDownloadURL(storageRef); // Get the file URL

      await db.collection("videos").add({
        title,
        url,
        likes: 0,
      });

      setMessage("Video uploaded successfully!"); // Set success message

      // Redirect to the video list page after 2 seconds
      setTimeout(() => {
        navigate("/videos"); // Use navigate instead of history.push
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error uploading video: ", error);
      setMessage("Error uploading video. Please try again."); // Set error message
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          required
        />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p style={{ color: message.includes("Error") ? "red" : "green" }}>{message}</p>} {/* Display success or error message */}
    </div>
  );
};

export default VideoUpload;