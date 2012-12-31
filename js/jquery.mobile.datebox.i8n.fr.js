/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notifcation.
 * https://github.com/jtsage/jquery-mobile-datebox
 *
 * Translation by: Unknown
 *
 */

jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
	'fr': {
		setDateButtonLabel: "Date Fix�e",
		setTimeButtonLabel: "R�gler l'heure",
		setDurationButtonLabel: "R�gler la dur�e",
		calTodayButtonLabel: "Aller � aujourd'hui",
		titleDateDialogLabel: "Choisir la Date",
		titleTimeDialogLabel: "Choisir le temps",
		daysOfWeek: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
		daysOfWeekShort: ["D", "L", "M", "M", "J", "V", "S"],
		monthsOfYear: ["Janvier", "F�vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao�t", "Septembre", "Octobre", "Novembre", "D�cembre"],
		monthsOfYearShort: ["Janv", "F�vr", "Mars", "Avril", "Mai", "Juin", "Juil", "Ao�t", "Sept", "Oct", "Nov", "D�c"],
		durationLabel: ["Jours", "Heures", "Minutes", "Secondes"],
		durationDays: ["Jour", "Jours"],
		tooltip: "Ouvrir le s�lecteur de date",
		nextMonth: "Suivant",
		prevMonth: "Pr�c�dent",
		timeFormat: 24,
		headerFormat: '%A, %-d %B, %Y',
		dateFieldOrder: ['d','m','y'],
		timeFieldOrder: ['h', 'i', 'a'],
		slideFieldOrder: ['y', 'm', 'd'],
		dateFormat: "%d/%m/%Y",
		useArabicIndic: false,
		isRTL: false,
		calStartDay: 0,
		clearButton: "Claire",
		durationOrder: ['d', 'h', 'i', 's'],
		meridiem: ["AM", "PM"],
		timeOutput: "%k:%M",
		durationFormat: "%Dd %DA, %Dl:%DM:%DS"
	}
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
	useLang: 'fr'
});
