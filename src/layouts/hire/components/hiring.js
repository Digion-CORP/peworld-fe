import axios from 'axios'
import styles from './Hiring.module.scss'
import { MdOutlineLocationOn, MdOutlineMail } from 'react-icons/md'
import { TbPhone } from 'react-icons/tb'
import { useState } from 'react'
import Cookies from 'js-cookie'
const Hiring = ({ data }) => {
  const results = data.data
  console.log(results, 'go')
  let from_profile_id = Cookies.get('profile_id')
  let to_profile_id = results[0].profile_id
  console.log(from_profile_id, to_profile_id, 'ini gus')
  let token = Cookies.get('token')
  const [message, setMessage] = useState({
    notification_message: '',
  })
  const handleMessage = (event) => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/notification/hire?from_profile_id=${from_profile_id}&to_profile_id=${to_profile_id}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.data) {
          alert('pesan sudah terkirim')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleAddMsg = (event) => {
    setMessage({ ...message, notification_message: event.target.value })
  }

  return (
    <>
      <div className={styles.wrapPage}>
        <div className="container">
          <div className="row">
            <div className={`${styles.leftCard} col-md-4`}>
              {results.map((item) => {
                return (
                  <>
                    <div className={styles.detailsLayout} key={item.profile_id}>
                      <div className={styles.profileImage}>
                        <img
                          src={`http://localhost:5000/uploads/${item.profile_picture}`}
                          alt="profile"
                        />
                      </div>
                      <div className={styles.profileInfo}>
                        <h4>{item.profile_name}</h4>
                        <h3>{item.profile_job}</h3>
                        <h5>{item.profile_job_type}</h5>
                        <p>
                          <span>
                            <MdOutlineLocationOn
                              className={styles.profileIcon}
                            />
                          </span>
                          {item.profile_location}
                        </p>
                        <p>
                          <span>
                            <TbPhone className={styles.profileIcon} />
                          </span>
                          {item.profile_phone_number}
                        </p>
                        <p>{item.profile_description}</p>
                      </div>
                      <div className={styles.profileSkills}>
                        <h2>Skills</h2>
                        <div className={styles.skillBox}>
                          <div className={styles.skillName}>{item.skill}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
            <div className={`${styles.msg} col-md-8`}>
              <div className={styles.header}>
                <h5>Hubungi Lous Tomlinson</h5>
              </div>
              <div className={styles.subject}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod
                  <br /> ipsum et dui rhoncus auctor.
                </p>
              </div>
              <div className={styles.message}>
                <form onSubmit={handleMessage}>
                  <div className={styles.messageForm}>
                    <label>Tujuan tentang pesan ini</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Projek</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className={styles.messageForm}>
                    <label>Pesan</label>
                    <textarea
                      type="textarea"
                      placeholder="Deskripsikan/jelaskan lebih detail"
                      onChange={handleAddMsg}
                    />
                  </div>
                </form>
              </div>
              <div className={styles.action}>
                <button onClick={handleMessage}>Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hiring
