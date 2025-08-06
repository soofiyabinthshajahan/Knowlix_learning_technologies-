import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Jaseem",
      title: "MD",
      image: "/md.jpg"
    },
    {
      id: 2,
      name: "Casac Benjali",
      title: "Director",
      image: "/director.jpg"
    },
    {
      id: 3,
      name: "Dr Nijad K K",
      title: "Asst. Professor - CALICULT University",
      // description: "Founding design team at Figma. Former Plex, Stripe, and Tile.",
      image: "/adv1.jpg"
    },
    {
      id: 4,
      name: "Muhammed Afsal",
      title: "MBA",
      // description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: "/adv2.jpg"
    },
    {
      id: 5,
      name: "Hidayathulla",
      title: "MD Zains",
      // description: "International Group",
      image: "/adv3.jpg"
    },
    {
      id: 6,
      name: "Suleeb Rahman",
      title: "GM of Pristine",
      // description: "Aligner",
      image: "/adv4.jpg"
    },
    {
      id: 7,
      name: "Shurufa Yasmin",
      title: "Councillor",
      image: "/councillor.jpg"
    },
    {
      id: 8,
      name: "Hiba Sherin",
      title: "B Ed",
      description: "BA Communication, Media and History",
      image: "/core1.jpg"
    },
    {
      id: 9,
      name: "Chaithra Nair",
      title: "MA History",
      
      image: "/core2.jpg"
    },
    // {
    //   id: 10,
    //   name: "",
    //   title: "",
    //   description: "",
    //   image: ""
    // },
    {
      id: 11,
      name: "Safvana Jasmin",
      title: "Online Tutor Expert",
      // description: "desc",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
    }
  ];

  const leadership = teamMembers.slice(0, 2);
  const advisoryBoard = teamMembers.slice(2, 6);
  const coreTeam = teamMembers.slice(6, 11); // add 2 more if needed

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    justifyContent: 'center',
    marginBottom: '64px',
  };

  const renderTeam = (members, columns = 'auto-fit') => {
    const customGridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(260px, 1fr))`,
      gap: '32px',
      justifyContent: 'center',
      marginBottom: '64px',
      padding: '0, 15px'
    };

    return (
      <div style={customGridStyle}>
        {members.map((member) => (
          <div key={member.id} style={{ textAlign: 'center', maxWidth: '300px', margin: '0 auto' }}>
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
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
              {member.name}
            </h3>
            <p style={{ fontSize: '18px', fontWeight: '680', color: '#111827', marginBottom: '8px' }}>
              {member.title}
            </p>
            <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
              {member.description}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', padding: '64px 16px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Main Title */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#052e2eff',
            marginBottom: '24px',
            lineHeight: '1.2',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            We are the people who<br />
            make up Knowlix
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

        {/* Leadership */}
        {renderTeam(leadership)}

        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: '#111827' }}>Advisory Board</h2>
        {renderTeam(advisoryBoard)}

        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: '#111827' }}>Core Team</h2>
        {renderTeam(coreTeam, 5)}

      </div>
    </div>
  );
};

export default TeamSection;
