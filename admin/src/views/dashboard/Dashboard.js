import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLibrary, cilSchool, cilNewspaper, cilCommentBubble } from '@coreui/icons'
import secureLocalStorage from 'react-secure-storage'

// ✅ Safe role fetch
const loginInfo = secureLocalStorage.getItem('logininfo')
const userRole = loginInfo ? JSON.parse(loginInfo).role : '1'

const Dashboard = () => {
  // ✅ STATIC DATA (No API)
  const statsAdmin = [
    {
      title: 'Total University',
      count: 12,
      icon: cilSchool,
      label: 'University',
      color: '#198754',
    },
    {
      title: 'Total Course',
      count: 30,
      icon: cilLibrary,
      label: 'Course',
      color: '#fd7e14',
    },
    {
      title: 'Total Blog',
      count: 18,
      icon: cilNewspaper,
      label: 'Blog',
      color: '#0d6efd',
    },
  ]

  const statsContent = [
    {
      title: 'Total Blog',
      count: 18,
      icon: cilNewspaper,
      label: 'Blog',
      color: '#0d6efd',
    },
    {
      title: 'Total Query',
      count: 7,
      icon: cilCommentBubble,
      label: 'Query',
      color: '#fd7e14',
    },
  ]

  const statsOperator = [
    {
      title: 'Total University',
      count: 10,
      icon: cilSchool,
      label: 'University',
      color: '#198754',
    },
    {
      title: 'Total Course',
      count: 25,
      icon: cilLibrary,
      label: 'Course',
      color: '#fd7e14',
    },
  ]

  // ✅ Role-based data
  const data =
    userRole === '1'
      ? statsAdmin
      : userRole === '2'
        ? statsContent
        : userRole === '3'
          ? statsOperator
          : []

  return (
    <div className="p-4">
      <h3 className="mb-4">Dashboard</h3>

      <CRow className="g-4">
        {data.map((item, index) => (
          <CCol md={6} lg={3} sm={12} key={index}>
            <CCard
              className="text-white shadow"
              style={{
                backgroundColor: item.color,
                borderRadius: '1rem',
              }}
            >
              <CCardBody className="d-flex justify-content-between align-items-center py-4">
                {/* LEFT */}
                <div>
                  <div style={{ fontSize: '1rem', opacity: 0.9 }}>{item.title}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{item.count}</div>
                </div>

                {/* RIGHT */}
                <div className="text-center">
                  <CIcon icon={item.icon} size="xxl" />
                  <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{item.label}</div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default Dashboard
