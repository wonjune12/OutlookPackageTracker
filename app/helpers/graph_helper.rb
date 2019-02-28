require 'httparty'

# Graph API helper methods
module GraphHelper
  GRAPH_HOST = 'https://graph.microsoft.com'.freeze

  def make_api_call(endpoint, token, params = nil)
    headers = {
      Authorization: "Bearer #{token}"
    }

    query = params || {}

    HTTParty.get "#{GRAPH_HOST}#{endpoint}",
                 headers: headers,
                 query: query
  end

  def get_mail_messages(token)
    get_mails_url = '/v1.0/me/mailFolders/inbox/messages'
    query = {
      '$select': 'subject,from,body',
      '$orderby': 'receivedDateTime DESC'
    }

    response = make_api_call get_mails_url, token, query

    raise response.parsed_response.to_s || "Request returned #{response.code}" unless response.code == 200
    response.parsed_response['value']
  end

end
