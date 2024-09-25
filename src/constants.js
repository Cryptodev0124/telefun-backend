const status = Object.freeze({
    QUEUED: 'QUEUED',
    ACCEPTED: 'ACCEPTED',
    SENT: 'SENT',
    MINED: 'MINED',
    RESUBMITTED: 'RESUBMITTED',
    CONFIRMED: 'CONFIRMED',
    FAILED: 'FAILED',
})

module.exports = {
    status,
}
  