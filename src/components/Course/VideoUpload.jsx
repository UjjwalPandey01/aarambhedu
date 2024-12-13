// src/components/VideoUpload.js
import React, { useState } from "react";

const VideoUpload = () => {
  const [chapters, setChapters] = useState([
    { id: 1, name: "Chapter 1", sections: [{ id: 1, videos: [] }] },
  ]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [videoFormData, setVideoFormData] = useState({
    id: null,
    name: "",
    file: null,
    description: "",
  });

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVideoFileChange = (e) => {
    setVideoFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleAddVideoClick = (chapter) => {
    setSelectedChapter(chapter);

    const lastSection = chapter.sections[chapter.sections.length - 1];
    if (lastSection.videos.length >= 5) {
      const newSection = { id: lastSection.id + 1, videos: [] };
      chapter.sections.push(newSection);
      setSelectedSection(newSection);
    } else {
      setSelectedSection(lastSection);
    }

    setShowUploadForm(true);
    setVideoFormData({ id: null, name: "", file: null, description: "" });
  };

  const handleEditClick = (chapter, section, video) => {
    setSelectedChapter(chapter);
    setSelectedSection(section);
    setShowUploadForm(true);
    setVideoFormData(video);
  };

  const handleRemoveVideo = (chapterId, sectionId, videoId) => {
    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === chapterId) {
        const updatedSections = chapter.sections.map((section) => {
          if (section.id === sectionId) {
            return {
              ...section,
              videos: section.videos.filter((video) => video.id !== videoId),
            };
          }
          return section;
        });
        return { ...chapter, sections: updatedSections };
      }
      return chapter;
    });

    setChapters(updatedChapters);
  };

  const handleVideoUpload = () => {
    if (!videoFormData.name || !videoFormData.file || !videoFormData.description) {
      alert("All fields are required!");
      return;
    }

    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === selectedChapter.id) {
        const updatedSections = chapter.sections.map((section) => {
          if (section.id === selectedSection.id) {
            const isEdit = videoFormData.id !== null;
            const videos = isEdit
              ? section.videos.map((video) =>
                  video.id === videoFormData.id ? { ...videoFormData } : video
                )
              : [
                  ...section.videos,
                  { ...videoFormData, id: Date.now(), file: videoFormData.file.name },
                ];
            return { ...section, videos };
          }
          return section;
        });
        return { ...chapter, sections: updatedSections };
      }
      return chapter;
    });

    setChapters(updatedChapters);
    setShowUploadForm(false);
    setVideoFormData({ id: null, name: "", file: null, description: "" });
  };

  const closeUploadForm = () => {
    setShowUploadForm(false);
    setVideoFormData({ id: null, name: "", file: null, description: "" });
  };

  const hasUploadedContent = chapters.some((chapter) =>
    chapter.sections.some((section) => section.videos.length > 0)
  );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-xl font-semibold">Upload Videos by Chapter</h2>
          <div>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-600"
                onClick={() => handleAddVideoClick(chapter)}
              >
                Add
              </button>
            ))}
          </div>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="relative bg-gray-100 p-4 border rounded-md">
            {/* Cross Icon */}
            <button
              onClick={closeUploadForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h3 className="text-lg font-medium">
              {videoFormData.id ? "Edit" : "Add"} Video for {selectedChapter.name}, Section{" "}
              {selectedSection.id}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Video Name</label>
                <input
                  type="text"
                  name="name"
                  value={videoFormData.name}
                  onChange={handleVideoInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Upload File</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoFileChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={videoFormData.description}
                  onChange={handleVideoInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                onClick={handleVideoUpload}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                {videoFormData.id ? "Update" : "Upload"}
              </button>
            </div>
          </div>
        )}

        {/* Display Videos */}
        {hasUploadedContent &&
          chapters.map((chapter) => (
            <div key={chapter.id} className="space-y-4">
              <h3 className="text-lg font-medium">{chapter.name}</h3>
              {chapter.sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <h4 className="text-md font-semibold">Section {section.id}</h4>
                  {section.videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
                    >
                      <div>
                        <p>{video.name}</p>
                        <p className="text-sm text-gray-500">{video.description}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleEditClick(chapter, section, video)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleRemoveVideo(chapter.id, section.id, video.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoUpload;
