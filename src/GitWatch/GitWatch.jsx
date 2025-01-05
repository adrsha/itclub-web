import React, { useState, useEffect } from "react";
import "./GitWatch.css";
import GitWatchJSON from "../../data/GitWatch.json";

export default function GitWatch() {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRepoData = async () => {
      try {
        const promises = GitWatchJSON.map((gw) =>
          fetch(
            `https://api.github.com/repos/${gw.username}/${gw.repository}/commits`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            },
          ).then((response) => {
            if (!response.ok) {
              throw new Error(
                `Failed to fetch data for ${gw.username}/${gw.repository}`,
              );
            }
            return response.json();
          }),
        );

        const results = await Promise.all(promises);

        // Combine repository info with commit data
        const enhancedData = results.map((commits, index) => ({
          repository: `${GitWatchJSON[index].username}/${GitWatchJSON[index].repository}`,
          commits: commits,
        }));

        enhancedData.sort((a, b) => {
          if (
            a.commits[0].commit.author.date < b.commits[0].commit.author.date
          ) {
            return 1;
          } else {
            return -1;
          }
        });

        setRepoData(enhancedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRepoData();
  }, []);

  if (loading) {
    return <div className="p-4">Loading repository data...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="mainContainer">
      {repoData.map((repo, index) => (
        <div className="commitContainer glass" key={index}>
          <div key={index} className="eachCommit">
            <h2 className="commitHeader">{repo.repository}</h2>
            <ul className="moreDetails">
              {repo.commits.slice(0, 5).map((commit) => (
                <li key={commit.sha} className="">
                  <p className="font-medium">{commit.commit.message}</p>
                  <p className="">
                    By: {commit.commit.author.name} on{" "}
                    {new Date(commit.commit.author.date).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function GitDetails() {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRepoData = async () => {
      try {
        const promises = GitWatchJSON.map((gw) =>
          fetch(
            `https://api.github.com/repos/${gw.username}/${gw.repository}/commits`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            },
          ).then((response) => {
            if (!response.ok) {
              throw new Error(
                `Failed to fetch data for ${gw.username}/${gw.repository}`,
              );
            }
            return response.json();
          }),
        );

        const results = await Promise.all(promises);

        // Combine repository info with commit data
        const enhancedData = results.map((commits, index) => ({
          repository: `${GitWatchJSON[index].username}/${GitWatchJSON[index].repository}`,
          commits: commits,
        }));

        setRepoData(enhancedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRepoData();
  }, []);
  let noOfRepos = repoData.length;
  let latestCommit = {};

  repoData.sort((a, b) => {
    if (a.commits[0].commit.author.date < b.commits[0].commit.author.date) {
      return 1;
    } else {
      return -1;
    }
  });
  // console.log("Repo", repoData[0])
  if (repoData.length > 0) {
    latestCommit.author = repoData[0].commits[0].commit.author.name;
    latestCommit.committer = repoData[0].commits[0].commit.committer.name;
    latestCommit.time = new Date(repoData[0].commits[0].commit.author.date);
    latestCommit.repo = repoData[0].repository;
  }

  return {latestCommit: latestCommit, noOfRepos: noOfRepos}
}
