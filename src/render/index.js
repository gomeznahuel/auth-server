const RenderHome = () => {
  return `
        <div class="home">
          <h1>Welcome!</h1>
          <p>Patea a <b>/api/auth/login</b> para iniciar sesión.</p>
          <p>Patea a <b>/api/auth/register</b> para registrarte.</p>
        </div>
    `;
};

module.exports = RenderHome;
