import React, { useEffect, useState } from "react";
import { createClient } from 'contentful';
import Projects from "./Projects";


  const client = createClient({
    space: "eurwomxco497",
    environment: "master", // defaults to 'master' if not set
    accessToken: "aqvwo_J6MxF3AWKpNKq8XKXVGr6isScu2UnawEVB6t0",
  });

  export function useFetchProjects() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
      try {
        const response = await client.getEntries({content_type: "projects"});
        const projects = response.items.map((data) => {
          const {title, url:link} = data['fields'];
          const {description:image_desc} = data['fields']['image']['fields'];
          const {url: image_url} = data['fields']['image']['fields']['file'];
          const {id} = data['sys'];
          return {id, title, link, image_url, image_desc};
        });
        setProjects(projects);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    useEffect(() => {
      getData();
    }, []);
    return {loading, projects};
  }