import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLibrary, cilSchool, cilNewspaper, cilCommentBubble } from '@coreui/icons'

const Dashboard = () => {
  // ✅ STATIC DATA ONLY
  const stats = [
    {
      title: 'Total Services',
      count: 12,
      icon: cilSchool,
      label: 'Services',
      color: '#198754',
    },
    {
      title: 'Total Orders',
      count: 30,
      icon: cilLibrary,
      label: 'Orders',
      color: '#fd7e14',
    },
    {
      title: 'Total Products',
      count: 18,
      icon: cilNewspaper,
      label: 'Products',
      color: '#0d6efd',
    },
    {
      title: 'Total Query',
      count: 7,
      icon: cilCommentBubble,
      label: 'Query',
      color: '#6f42c1',
    },
  ]

  return (
    <div className="p-4">
      <h3 className="mb-4">Dashboard</h3>

      <CRow className="g-4">
        {stats.map((item, index) => (
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
