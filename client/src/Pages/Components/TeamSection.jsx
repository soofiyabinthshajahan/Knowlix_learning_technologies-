import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sienna Hewitt",
      title: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b5c36842?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ashwin Santiago",
      title: "Engineering Manager",
      description: "Lead engineering teams at Netflix, Pitchbook, and Protocol Labs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Caitlyn King",
      title: "Product Designer",
      description: "Founding design team at Figma. Former Plex, Stripe, and Tile.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Owen Garcia",
      title: "Frontend Developer",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lulu Meyers",
      title: "Product Manager",
      description: "Former product lead at Stripe and early team member at Notion.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Orlando Diggs",
      title: "Backend Developer",
      description: "Built scalable systems at Uber and led infrastructure at Airbnb.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Kyla Clay",
      title: "UX Researcher",
      description: "Research lead at Pinterest and former design researcher at Google.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Brianna Ware",
      title: "Customer Success",
      description: "Customer success leader at Slack and support team lead at Zendesk.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb', padding: '64px 16px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '24px', 
            lineHeight: '1.2',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            We are the people who<br />
            make up Untitled UI
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280', 
            maxWidth: '512px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our philosophy is simple: hire great people and give them
            the resources and support to do their best work.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px',
          '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
          }
        }}>
          {teamMembers.map((member) => (
            <div key={member.id} style={{ textAlign: 'center' }}>
              {/* Profile Image */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ 
                  width: '100%', 
                  aspectRatio: '1', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  backgroundColor: '#e5e7eb'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </div>

              {/* Member Info */}
              <div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  color: '#111827', 
                  marginBottom: '8px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  {member.name}
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  fontWeight: '500', 
                  color: '#4f46e5', 
                  marginBottom: '8px'
                }}>
                  {member.title}
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6b7280', 
                  lineHeight: '1.5'
                }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;