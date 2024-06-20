import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Event from "./Event";
import LoadingScreen from "./LoadingScreen";

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    fetch("https://youngproductions-768ada043db3.herokuapp.com/api/workVideos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const foundEvent = data.find((event) => event.id === eventId);
        setEvent(foundEvent);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching workVideos:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [eventId]);

  // Conditionally render loading screen while data is being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-page">
      <Event
        location={event.location}
        date={event.date}
        title={event.title}
        videoUrl={event.videoUrl}
        description={event.description}
        headquarters={event.headquarters}
        facebook={event.facebook}
        instagram={event.instagram}
        tiktok={event.tiktok}
      />
    </div>
  );
};

export default EventPage;
