import { useCountdown } from '../hooks/useCountdown'

type Props = {
  targetDate: string
  label: string
}

const CountdownBadge = ({ targetDate, label }: Props) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate)

  if (isExpired) {
    return (
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.4rem 0.9rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        marginBottom: '0.5rem',
      }}>
        <i className="fa-solid fa-flag-checkered"></i>
        {label} — Completed
      </div>
    )
  }

  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <div style={{
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--accent-gold)',
        marginBottom: '0.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}>
        <i className="fa-regular fa-clock"></i> {label}
      </div>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        background: 'rgba(201,169,110,0.06)',
        border: '1px solid rgba(201,169,110,0.2)',
        borderRadius: '10px',
        padding: '0.5rem 0.9rem',
      }}>
        {[
          { val: days,    sub: 'Days' },
          { val: hours,   sub: 'Hrs'  },
          { val: minutes, sub: 'Min'  },
          { val: seconds, sub: 'Sec'  },
        ].map((unit, i) => (
          <div key={unit.sub} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                lineHeight: 1,
                minWidth: '2ch',
              }}>
                {String(unit.val).padStart(2, '0')}
              </div>
              <div style={{
                fontSize: '0.6rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginTop: '0.15rem',
              }}>
                {unit.sub}
              </div>
            </div>
            {i < 3 && (
              <span style={{
                color: 'rgba(201,169,110,0.5)',
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '0.75rem',
                marginLeft: '0.1rem',
              }}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownBadge