import React, { useState, useEffect } from "react";
import resumeData from "../data/resumeData.json";

const Resume = () => {
  const [data, setData] = useState({});
  const skills = data.skills?.skills || [];
  const experience = data.experience?.company || [];

  useEffect(() => {
    setData(resumeData);
  }, []);

  return (
    <div className="resume p-4">
      <h1 className="text-3xl font-semibold mb-4 text-white">Resume</h1>
      <div className="rounded-full">
        <img
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          src={resumeData.contact.image}
          alt="Profile"
        />
      </div>
      <div className="resume-content">
      <h2 className="text-lg font-mono mb-2 bg-primary p-2 rounded text-center">
            Personal Info
          </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="section">
         
            <p>Name: {data?.contact?.name}</p>
            <p>Surname: {data?.contact?.surname}</p>
            <p>Email: {data?.contact?.email}</p>
            <p>Phone: {data?.contact?.phone}</p>
            <p>Address: {data?.contact?.address}</p>
            <p>Website: {data?.contact?.website}</p>
          </div>
        </div>
        <div className="section">
          <h2 className="text-lg font-semibold mb-2 bg-primary p-2 rounded text-center">
            Summary
          </h2>
          <p>{data?.summary?.summary}</p>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <div className="section">
              <h2 className="text-lg font-semibold mb-2 bg-primary p-2 rounded text-center">
                {data.skills?.title}
              </h2>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.id} className="mb-4">
                    <p className="mb-1 text-base font-medium dark:text-white">
                      {skill.name}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 dark:bg-gray-700">
                      <div
                        className="skill-bar-fill bg-red-600 h-2.5 rounded-full dark:bg-red-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
                      Level: {skill.level}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-1/2 pl-2">
            <div className="section">
            <h2 className="text-lg font-semibold mb-2 bg-primary p-2 rounded text-center">
              {data?.experience?.title}
            </h2>
            <ul>
              {experience.map((exp) => (
                <li key={exp.id} className="mb-4">
                  <p className="mb-1 text-base font-medium dark:text-white">
                    {exp.name}
                  </p>
                  <p className="mb-1 text-base font-medium dark:text-white">
                    {exp.position}
                  </p>
                  <p className="mb-1 text-base font-medium dark:text-white">
                    {exp.date}
                  </p>
                  <p className="mb-1 text-base font-medium dark:text-white">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
