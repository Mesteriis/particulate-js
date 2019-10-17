QUnit.module('Constraint.Point')

var ParticleSystem = Particulate.ParticleSystem
var PointConstraint = Particulate.PointConstraint
var slice = Array.prototype.slice

QUnit.test('Creation', function (assert) {
  var position = [1, 2, 3]
  var index = 0
  var constraint = PointConstraint.create(position, index)

  assert.equalArray(constraint.bufferVec3, position,
    'Should initialize position as passed vec3.')
})

QUnit.test('Application', function (assert) {
  var system = ParticleSystem.create(4, 10)
  var position = [1, 2, 3]
  var index = 2
  var constraint = PointConstraint.create(position, index)

  system.addConstraint(constraint)
  system.tick(1)

  var ix = index * 3
  var p0 = slice.call(system.positions, ix, ix + 3)
  var p1 = slice.call(system.positionsPrev, ix, ix + 3)

  assert.equalArray(p0, position, 'Should set particle\'s position.')
  assert.equalArray(p1, position, 'Should set particle\'s previous position.')
})
