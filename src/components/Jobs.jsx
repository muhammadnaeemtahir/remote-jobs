import { useState, useEffect } from "react"
import { BeatLoader } from "react-spinners"

const Jobs = () => {
    const [category, setCategory] = useState('software-dev')
    const [jobs, setJobs] = useState(null)

    const getJobs = async () => {
        setJobs(null)
        const response = await fetch(`https://remotive.com/api/remote-jobs?category=${category}`)
        const { jobs } = await response.json()
        console.log(Object.values(jobs))
        setTimeout(() => {
            setJobs(Object.values(jobs))
        }, 500)
    }

    useEffect(() => {
        getJobs()
    }, [category])

    return (
        <>
            <div className="container py-5">
                <ul className="nav bg-primary bg-opacity-25 rounded py-2 justify-content-center nav-pills mb-5">
                    <li className="nav-item">
                        <button className="nav-link fw-bold active" data-bs-toggle="pill" type="button"
                            onClick={() => {
                                setCategory('software-dev')
                                getJobs()
                            }}
                        >Software Development</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link fw-bold" data-bs-toggle="pill" type="button"
                            onClick={() => {
                                setCategory('design')
                                getJobs()
                            }}
                        >Design</button>
                    </li>
                </ul>
                <main className="row g-4">
                    {
                        jobs ? (
                            jobs.length > 0 && jobs.map(job => (
                                <div className="col-md-4" key={job.id}>
                                    <div className="card border-0 h-100">
                                        <div className="card-body rounded shadow-sm bg-light">
                                            <h5 className="card-title">{job.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                                {job.company_name}, {job.candidate_required_location}</h6>
                                            <p className="card-text mb-0"><strong>Job Type: </strong>{job.job_type}</p>
                                            <p className="card-text mb-0"><strong>Salary: </strong>{job.salary ? job.salary : 'N/A'}</p>
                                            <p className="card-text mb-0"><strong>Published On: </strong>{new Date(job.publication_date).toLocaleString()}</p>
                                            <a href={job.url} target="_blank" className="btn btn-dark w-100 my-2">Apply</a>
                                            {job.tags && job.tags.length > 0 && job.tags.slice(0, 3).map((tag, index) => (
                                                <span className="badge text-bg-secondary me-1" key={index}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center">
                                <BeatLoader color="#36d7b7" />
                            </div>
                        )
                    }
                </main>
            </div >
        </>
    )
}

export default Jobs;