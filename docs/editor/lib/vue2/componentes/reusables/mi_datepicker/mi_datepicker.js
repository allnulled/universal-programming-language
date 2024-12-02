Vue.component('mi-datepicker', {
  template: `
    <div>
      <input type="text" v-model="selectedDate" @click="toggleCalendar">
      <div class="calendar" :class="{ 'open': isOpen }">
        <div class="calendar-header">
          <button @click="previousMonth">&lt;</button>
          <span>{{ currentMonth }}</span>
          <button @click="nextMonth">&gt;</button>
        </div>
        <table>
          <thead>
            <tr>
              <th v-for="day in days">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(week, index) in calendar" :key="index">
              <td v-for="date in week" :class="{'disabled': !isInCurrentMonth(date), 'selected': isSelected(date), 'day': isInCurrentMonth(date) }" @click="selectDate(date)">
                {{ date !== '' ? date : ' ' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  props: {
    selectedDate: {
      type: String,
      default: ''
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isOpen: false,
      currentDate: new Date(),
    };
  },
  computed: {
    days() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    },
    currentMonth() {
      return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
    calendar() {
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
      const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
      const calendar = [];
      let date = 1;

      for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDayOfMonth - 1) {
            week.push('');
          } else if (date > daysInMonth) {
            break;
          } else {
            week.push(date++);
          }
        }
        calendar.push(week);
      }

      return calendar;
    }
  },
  methods: {
    toggleCalendar() {
      this.isOpen = !this.isOpen;
    },
    previousMonth() {
      const newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
      this.currentDate = newDate;
    },
    nextMonth() {
      const newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
      this.currentDate = newDate;
    },
    isInCurrentMonth(date) {
      const currentMonth = this.currentDate.getMonth();
      const currentYear = this.currentDate.getFullYear();
      return new Date(currentYear, currentMonth, date).getMonth() === currentMonth;
    },
    isSelected(date) {
      const selectedDate = new Date(this.selectedDate);
      return selectedDate.getDate() === date && this.isInCurrentMonth(date);
    },
    selectDate(date) {
      const currentMonth = this.currentDate.getMonth();
      const currentYear = this.currentDate.getFullYear();
      const selectedDate = new Date(currentYear, currentMonth, date);
      this.selectedDate = selectedDate.toISOString().split('T')[0];
      this.onChange(this.selectedDate);
      this.isOpen = false;
    }
  }
});
