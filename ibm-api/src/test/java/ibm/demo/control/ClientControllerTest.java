package ibm.demo.control;

import static org.junit.Assert.*;

import java.io.IOException;
import java.util.List;

import org.apache.commons.lang3.RandomUtils;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.junit.Test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import ibm.demo.entity.Client;

public class ClientControllerTest {

	@Test
	public void testGetClientList() throws ClientProtocolException, IOException {
		// Given
		HttpUriRequest request = new HttpGet("http://localhost/client");
		// When
		HttpResponse httpResponse = HttpClientBuilder.create().build().execute(request);
		
		String jsonFromResponse = EntityUtils.toString(httpResponse.getEntity());
	    ObjectMapper mapper = new ObjectMapper()
	      .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	    List<Client> clientList = mapper.readValue(jsonFromResponse, new TypeReference<List<Client>>(){});
	    assertEquals(clientList.size(), 4);
	}

	@Test
	public void testFindClientById() throws ClientProtocolException, IOException {
		// Given
		HttpUriRequest request = new HttpGet("http://localhost/client/3");
		// When
		HttpResponse httpResponse = HttpClientBuilder.create().build().execute(request);
		String jsonFromResponse = EntityUtils.toString(httpResponse.getEntity());
	    ObjectMapper mapper = new ObjectMapper()
	      .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	    Client client = mapper.readValue(jsonFromResponse, Client.class);
	    assertEquals(client.getFullName(), "Howling Murdock");
	}

	@Test
	public void testNewClient() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	public void givenUserDoesNotExists_whenUserInfoIsRetrieved_then404IsReceived()
			throws ClientProtocolException, IOException {
		// Given
		HttpUriRequest request = new HttpGet("http://localhost/client/" + RandomUtils.nextLong(5, 100));
		// When
		HttpResponse httpResponse = HttpClientBuilder.create().build().execute(request);
		assertEquals(httpResponse.getStatusLine().getStatusCode(), HttpStatus.SC_NOT_FOUND);
	}

}
