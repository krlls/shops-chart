import moment from 'moment'

export const pointIcon = 'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cmVjdCB4PSIxMiIgeT0iOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIgZmlsbD0iI0ZGNjk1NSIvPgo8cmVjdCB4PSIxNCIgeT0iMTAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo='

export const tooltipFormatter = (params) => {
  const { value, date } = params[0].data
  const formattedDate = moment(date).format('DD MMM YYYY')

  const styleTooltip = `
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 90px;
    padding: 10px 0px 0px 10px; 
    background: white; 
    box-shadow: 0px 8px 32px rgba(18, 16, 37, 0.03);
    border-radius: 8px; 
    border: 1px solid rgba(18, 16, 37, 0.05);
    color: rgba(18, 16, 37, 0.5);
    font-family: 'Rubik', sans-serif;
    font-size: 11px;
    line-height: 16px;
  `
  const styleItem = `
    margin-bottom: auto;
  `
  const styleTitle = `
    text-transform: uppercase;
    font-weight: 500;
  `

  const styleCost = `
    font-size: 20px;
    color: #121025;
  `

  const styleData = `
    color: #A19FB0;
    font-size: 13px;
  `

  return `
    <div style="${styleTooltip}">
      <div style="${styleItem + styleTitle}">
        Total sold
      </div>
      <div style="${styleItem + styleCost}">
        ${value.toLocaleString()} €
      </div>
      <div style="${styleItem + styleData}">
        ${formattedDate}
      </div> 
    </div>
  `
}

export const labelFormatter = (item, index) => (index ? moment(item).format('DD') : '')
