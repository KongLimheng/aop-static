import { Link } from 'react-router-dom'
import { BackArrow, CrossIcon, Profile } from '../assets'

const CustomerType = () => {
  // const setMaxWidth = store((state) => state.setMaxWidth)
  // const setIsMini = store((state) => state.setIsMini)

  // useEffect(() => {
  //   setMaxWidth('640px')
  //   setIsMini(true)
  // })

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Link className="text-decoration-none" to="/e-services">
            <img src={BackArrow} alt="back" className="back-arrow" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={CrossIcon} alt="" className="close-btn" />
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center w-100">
        <div
          className="pb-4 custom-text h2"
          style={{ fontSize: 'calc(1em + 1vw)' }}
        >
          Customer Type
        </div>
        <img
          src={Profile}
          alt=""
          style={{
            width: '25vw',
            maxWidth: 280,
          }}
        />

        <div className="wrap-button d-flex flex-row w-100 align-items-center justify-content-evenly mt-5">
          <Link to="#" className="cnb-btn rounded-3 ">
            Existing
          </Link>
          <Link to="/new" className="cnb-btn rounded-3">
            New
          </Link>
        </div>
      </div>
    </>
  )
}

export default CustomerType
