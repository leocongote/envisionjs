describe('Interaction', function () {

  var
    H = envision;

  it('defines interaction', function () {
    expect(H.Interaction).toBeDefined();
  });

  it('creates an interaction', function () {
    expect(new H.Interaction()).toBeDefined();
  });

  it('makes a child a leader', function () {
    var
      interaction = new H.Interaction(),
      child = new MockChild();
    interaction.leader(child);
    expect(interaction.leaders).toContain(child);
  });

  it('makes a child a follower', function () {
    var
      interaction = new H.Interaction(),
      child = new MockChild();
    interaction.follower(child);
    expect(interaction.followers).toContain(child);
  });

  it('makes a group from one child', function () {
    var
      interaction = new H.Interaction(),
      child = new MockChild();
    interaction.group(child);
    expect(interaction.leaders).toContain(child);
    expect(interaction.followers).toContain(child);
  });

  it('makes a group from multiple', function () {
    var
      interaction = new H.Interaction(),
      a = new MockChild(),
      b = new MockChild();
    interaction.group(a);
    interaction.group(b);
    expect(interaction.leaders).toContain(a);
    expect(interaction.leaders).toContain(b);
    expect(interaction.followers).toContain(a);
    expect(interaction.followers).toContain(b);
  });

  describe('Chaining', function () {
    var
      interaction, child;

    beforeEach(function () {
      interaction = new H.Interaction();
      child = new MockChild();
    });
    afterEach(function () {
      interaction = null;
      child = null;
    });

    it('chains leader', function () {
      expect(interaction.leader(child)).toBe(interaction);
    });

    it('chains follower', function () {
      expect(interaction.follower(child)).toBe(interaction);
    });

    it('chains group', function () {
      expect(interaction.group(child)).toBe(interaction);
    });
  });

});
