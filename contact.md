---
layout: page
title: Contact
permalink: /contact/
---


<div class="widget-container-davidykay">
    <div class="profile-testimonial-panel">
        <div class="profile-container">
            <div class="left-panel">
                <div class="profile-panel">
                    <div class="picture-panel">
                    </div>
                    <div class="name-panel"></div>
                    <div class="location-panel"></div>
                </div>
            </div>
            <div class="middle-panel">
                <div class="bio-panel">
                    <div class="profile-bio"></div>
                </div>
                <div class="help-items-panel">
                    <div class="help-items-header">Let's talk and I will help you with:</div>
                    <hr class="help-items-divider">
                    <div class="help-items-container">
                        <div class="help-items">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial-container">
           <ul id="testimonial-slides"></ul>
        </div>
        <ul style="list-style-type: none !important; width: 10px;">
            <li id="testimonial-list-item-template">
                <div class="testimonials-panel">
                    <div class="testimonial-img-panel">
                    </div>
                    <div class="testimonial-body">
                        <div class="testimonial-text">
                        </div>
                    </div>
                    <div class="testimonial-user"></div>
                    <div class="testimonial-user-location"></div>
                </div>
            </li>
        </ul>
    </div>
	<div class="schedule-panel">
	    <div class="schedule-free-call" >SCHEDULE A FREE<br>30-MIN CALL</div>
	    <div class="timezone-panel">
	        <div class="timezone-header">TIMES SHOWN IN YOUR TIMEZONE:</div>
	        <div class="profile-timezone"><span class="entypo-clock"></span> </div>
	        <div class="timezone-footer">If it's not <span id="clock-davidykay"></span> click <a href="https://www.sohelpful.me/davidykay/appointments_calendars/455/show_schedule?selected_time_zone=" class="calendar-link" id="testimonial_link" rel="nofollow" target="_blank,">here</a> to change</div></div>
	    <div class="schedule-link-panel-template">
	        <a href="#" id="schedule-button">
	            <div class="schedule-link">
	                <div class="schedule-date-container">
	                    <span class="schedule-day"></span>
	                    <span class="schedule-date"></span>
	                </div>
	                <div class="schedule-time-container">
	                    <span class="schedule-time"></span>
	                    <span class="schedule-day-night-marker entypo-light-up"></span>
	                </div>
	            </div>
	        </a>
	    </div>
	    <div class="schedule-panel-footer">
	        <a href="https://www.sohelpful.me/davidykay/appointments_calendars/455/show_schedule?selected_time_zone=" class="calendar-link" id="calendar_link" rel="nofollow" target="_blank,">LOOK FOR ADDITIONAL TIMES</a>
	    </div>
	</div>
	<!-- Start booking form code. Do not touch -->
	<div id="dialog_form_davidykay" class="dialog_form mfp-hide">
	    <p class="booking-reminder-widget" id="booking-reminder-widget-davidykay">
	        You are booking a slot for<br>
	        <b><span id="form_time"></span></b><br>
	        <span id="form_timezone"></span><br>
	        <a href="#" id="change-call-date-time">change the call date/time</a>
	    </p>
	    <form accept-charset="UTF-8" action="https://www.sohelpful.me/profile_info/davidykay/create_async.json" class="simple_form form-vertical centered-form" id="new_booked_event_davidykay" method="post" novalidate="novalidate">
	        <div class="form-inputs">
	            <div class="control-group string required booked_event_name"><label class="string required control-label" for="booked_event_name"><abbr title="required">*</abbr> Your name</label><div class="controls"><input class="string required tel" id="booked_event_name" name="booked_event[name]" size="50" type="text"></div></div>
	            <span id="booked_event_name_error" class="help-inline"></span>
	            <div class="control-group email required booked_event_email"><label class="email required control-label" for="booked_event_email"><abbr title="required">*</abbr> What is your email address?</label><div class="controls"><input class="string email required" id="booked_event_email" name="booked_event[email]" placeholder="me@gmail.com" size="50" type="email"></div></div>
	            <span id="booked_event_email_error" class="help-inline"></span>
	            <div class="control-group select optional booked_event_call_preference"><label class="select optional control-label" for="booked_event_call_preference">How should we get in touch?</label><div class="controls">
	            	<select class="select optional" id="booked_event_call_preference" name="booked_event[call_preference]">
					</select>
				</div></div>
	            <div class="control-group string optional booked_event_skype_address" style="display: block;"><label class="string optional control-label" for="booked_event_skype_address">What is your Skype address?</label><div class="controls"><input class="string optional" id="booked_event_skype_address" name="booked_event[skype_address]" size="50" type="text"></div></div>
	            <span id="booked_event_skype_address_error" class="help-inline" style="display: inline;"></span>
	            <div class="control-group string optional booked_event_hangout_address" style="display: none;"><label class="string optional control-label" for="booked_event_hangout_address">What is your Google Hangout email address?</label><div class="controls"><input class="string optional" id="booked_event_hangout_address" name="booked_event[hangout_address]" size="50" type="text"></div></div>
	            <span id="booked_event_hangout_address_error" class="help-inline" style="display: none;"></span>
	            <div class="control-group tel optional booked_event_phone_number" style="display: none;"><label class="tel optional control-label" for="booked_event_phone_number">What is your Telephone number</label><div class="controls"><input class="string tel optional" id="booked_event_phone_number" name="booked_event[phone_number]" size="50" type="tel"></div></div>
	            <span id="booked_event_phone_number_error" class="help-inline" style="display: none;"></span>
	            <div class="control-group text optional booked_event_comment"><label class="text optional control-label" for="booked_event_comment">What would you like to talk about?</label><div class="controls"><textarea class="text optional" cols="40" id="booked_event_comment" name="booked_event[comment]" placeholder="I'd like to talk about..." rows="20"></textarea></div></div>
	
	            <input id="booked_event_visitor_time_zone" name="booked_event[visitor_time_zone]" type="hidden">
	            <input id="booked_event_start_at" name="booked_event[start_at]" type="hidden">
	            <input id="booked_event_end_at" name="booked_event[end_at]" type="hidden">
	            <input id="event_slot_id" name="event_slot_id" type="hidden">
	            <input id="async" name="async" type="hidden" value="yes">
	        </div>
	
	        <span class="form-button-container">
	            <input class="btn button button-success" id="submit_bookable_event_button" name="commit" rel="nofollow" type="submit" value="Book the time with me">
	        </span>
	    </form>
	</div>
	<!-- End booking form code. Do not touch -->
	<!-- Start error message code. Do not touch -->
	<div id="error_popup" class="mfp-hide">
	    My calendar changed while you were picking a slot. Could you please try again?
	</div>
	<!-- End error message code. Do not touch -->
	<!-- Start success code. Do not touch -->
	<div id="success_popup" class="mfp-hide">
		<div id="booking_receipt" class="booking-receipt">
			<div id="booking_overview" class="booking-overview">
				<h2 id="booking_overview_header">Our 30-minute call has been scheduled for:</h2>
				<p id="booking_date" class="booking-day"></p>
				<p id="booking_time" class="booking-time"></p>
				<p id="booking_timezone" class="booking-time-zone"></p>
				<a id="booking_export_link" href="#export-to-calendar" class="export-calendar">Export to Your Calendar</a>
				<ul id="booking_calendar_list" class="export-calendar-list">
					<li id="booking_calendar_list_item">
						<i class="export-calendar-icon export-outlook"></i>
						<a href="" rel="nofollow" id="outlook_path">Outlook</a>
					</li>
					<li id="booking_calendar_list_item">
						<i class="export-calendar-icon export-ical"></i>
						<a href="" rel="nofollow" id="ical_path">iCal</a>
					</li>
					
					<li id="booking_calendar_list_item">
						<i class="export-calendar-icon export-yahoo"></i>
						<a href="" rel="nofollow" target="_blank" id="yahoo_path">Yahoo</a>
					</li>
					<li id="booking_calendar_list_item">
						<i class="export-calendar-icon export-google"></i>
						<a href="" rel="nofollow" target="_blank" id="gcal_path">Google</a>
					</li>
				</ul>
			</div>
			<div id="booking_instructions" class="what-happens-now">
				<h4 id="booking_instructions_header">What happens now?</h4>
				<p id="booking_check_email">Check your email for instructions.</p>
				<p id="booking_add_skype"></p>
				<h4 id="booking_cancel_header">Need to cancel or change the time?</h4>
				<p><a href="" data-confirm="Are you sure you want to cancel this call?" id="cancel_call_link" rel="nofollow">Click here</a> to cancel or reschedule this call.</p>
			</div>
		</div>
	</div>
	<!-- End success code. Do not touch -->
	<!-- Start spinner code. Do not touch -->
	<div id="wait_popup" class="mfp-hide"></div>
	<!-- End spinner code. Do not touch -->
	
	<!-- Start waiter form code. Do not touch -->
	<div id="dialog_waiters_form_davidykay" class="dialog_waiters_form mfp-hide">
	    <form accept-charset="UTF-8" action="https://www.sohelpful.me/davidykay/appointments_calendars/455/waiters" class="simple_form form-vertical centered-form" id="new_waiter_davidykay" method="post" novalidate="novalidate"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="XB3yuZg/AhVM8nlriD5hv/HG/F+gBJ3XDA3/mLEcROw="></div>
	
	        <div class="form-inputs">
	            <div class="control-group email required waiter_email"><label class="email required control-label" for="waiter_email"><abbr title="required">*</abbr> What is your email address?</label><div class="controls"><input class="string email required" id="waiter_email" name="waiter[email]" placeholder="me@gmail.com" size="50" type="email"></div></div>
	            <span id="waiter_email_error" class="help-inline"></span>
	            <div class="control-group string required waiter_name"><label class="string required control-label" for="waiter_name"><abbr title="required">*</abbr> Your name</label><div class="controls"><input class="string required" id="waiter_name" name="waiter[name]" size="50" type="text"></div></div>
	            <span id="waiter_name_error" class="help-inline"></span>
	            <div class="control-group text optional waiter_comment"><label class="text optional control-label" for="waiter_comment">What would you like to talk about?</label><div class="controls"><textarea class="text optional" cols="40" id="waiter_comment" name="waiter[comment]" placeholder="I'd like to talk about..." rows="20"></textarea></div></div>
	            <input id="waiter_visitor_time_zone" name="waiter[visitor_time_zone]" type="hidden">
	            <input id="async" name="async" type="hidden" value="yes">
	        </div>
	
	        <span class="form-button-container">
	            <input class="btn button button-success" id="submit_waiter_button" name="commit" rel="nofollow" type="submit" value="Get notified when I am available">
	        </span>
	    </form>
	</div>
	<div id="waiters_success_form_davidykay" class="waiters_success mfp-hide">
		<h2 id="booking_overview_header">Great! You will get notified when I have more availability</h2>
	</div>
	<!-- End waiter form code. Do not touch -->
	<!-- Start 3rd party JavaScript imports. Do not touch -->
	<script src="https://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript"></script>
	<script src="https://code.jquery.com/ui/1.7.2/jquery-ui.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/dateFormat.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/jquery.magnific-popup.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/jquery.lightSlider.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/jquery.MyDigitClock-1.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.4/jstz.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/walltime-data.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/walltime.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/spin.min.js" type="text/javascript"></script>
	<script src="https://ddntvvbv9b75i.cloudfront.net/scripts/jquery.spin.js" type="text/javascript"></script>
	<!-- End 3rd party JavaScript imports. Do not touch -->
	<!-- Start SoHelpful JavaScript imports. Definitely do not touch  -->
	<script src="https://www.sohelpful.me/profile_info/davidykay/widget_css.js?on_load=true&amp;version=2"></script>
	<script src="https://www.sohelpful.me/profile_info/davidykay/widget_engine.js?on_load=false&amp;color=E74D3C&amp;testimonial_count=5&amp;font=Arial&amp;version=2"></script>
	<!-- End SoHelpful JavaScript imports. Definitely do not touch  -->
</div>
