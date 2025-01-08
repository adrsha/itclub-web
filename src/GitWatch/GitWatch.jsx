import React, { useState, useEffect } from "react";
import "./GitWatch.css";
import GitWatchJSON from "../../data/GitWatch.json";
import { log } from "mathjs";

export default function GitWatch() {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // let authorsCommits = new Map();
  const [repoAuthors, setRepoAuths] = useState(new Map());

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
                `Failed to fetch data for ${gw.repository}`,
              );
            }
            return response.json();
          }),
        );

        const results = await Promise.all(promises);
        let authNames = [];
        let authCommits = [];
        let repoAuth = [];

        results.forEach((repo, index) => {
          authNames = [];
          repo.forEach((cmt) => {
            if (!authNames.includes(cmt.commit.author.name)) {
              authNames.push(cmt.commit.author.name);
            }
          });

          authCommits = [];
          for (let i = 0; i < authNames.length; i++) {
            authCommits.push(0);
          }

          repo.forEach((cmt) => {
            for (let ind = 0; ind < authNames.length; ind++) {
              if (authNames[ind] == cmt.commit.author.name) {
                authCommits[ind]++;
              }
            }
          });

          let auth = [];
          authNames.forEach((_, i) => {
            auth.push([authNames[i], authCommits[i]]);
          });

          repoAuth.push([
            GitWatchJSON[index].repository,
            auth,
          ]);
        });

        // Combine repository info with commit data
        const enhancedData = results.map((commits, index) => ({
          repository: GitWatchJSON[index].repository,
          commits: commits,
          author: repoAuth,
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
    return <div className="">Error: {error}</div>;
  }

  return (
    <div className="mainContainer">
      {repoData.map((repo, index) => (
        <div className="commitContainer glass" key={index}>
          <div key={index} className="eachCommit">
            <h2 className="commitHeader">{repo.repository}</h2>
            <div className="repoAbstract">
              {
                Array.from(repo.author).map((repos) => (
                  repos[0] == repo.repository
                    ? repos[1].map((ac) =>
                      ac[0]!="KEC IT Club"?
                      <div className="authCommits" key={ac[0]}>
                          <div className="authorName">{ac[0]}</div>
                        {" "}has {" "}
                          <div className="noOfCommits">{ac[1]} commits</div>
                        </div> : null
                      )
                    : null
                ))
              }
            </div>

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
                `Failed to fetch data for ${gw.repository}`,
              );
            }
            return response.json();
          }),
        );

        const results = await Promise.all(promises);

        // Combine repository info with commit data
        const enhancedData = results.map((commits, index) => ({
          repository: GitWatchJSON[index].repository,
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
    
    if (a.commits.length < b.commits.length) {
      return 1;
    } else {
      return -1;
    }
  });
  let returndata = repoData.map(data => {
    return {
"name": data.repository,
"commits" : data.commits.length
    }

    }) 
  return returndata;
}
