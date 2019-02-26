require 'uri'
require 'net/http'
require 'httparty'
require 'json'
class MailController < ApplicationController
  include GraphHelper

  def index
    @messages = get_mail_messages access_token || []

  rescue RuntimeError => e
    @errors = [
      {
        message: 'Microsoft Graph returned an error getting mails.',
        debug: e
      }
    ]
  end
end
