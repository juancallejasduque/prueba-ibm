package ibm.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ibm.demo.entity.Client;
import ibm.demo.service.ClientService;

/**
 * 
 * @author JuanPablo
 *
 */
@RestController
public class ClientController {

	@Autowired
	ClientService clientService;
	
	@RequestMapping(value="/client")
	public ResponseEntity<List<Client>> getClientList() {
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		List<Client> clientList = clientService.getAllClients();
		return new ResponseEntity<List<Client>>(clientList, headers, HttpStatus.CREATED);
	}
	
	@RequestMapping("/client/{id}")
	public ResponseEntity<Client> findClientById(@PathVariable("id") long id) {
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<Client>(clientService.findClientById(id), headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/client", method = RequestMethod.POST)
	public ResponseEntity<Long> newClient(@RequestBody Client client) {
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<Long>(clientService.insert(client), headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/client", method = RequestMethod.PUT)
	public ResponseEntity<Integer> updateClient(@RequestBody Client client) {
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<Integer>(clientService.update(client), headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/client/{id}" , method = RequestMethod.DELETE)
	public ResponseEntity<Integer> deleteClient(@RequestBody Client client) {
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<Integer>(clientService.update(client), headers, HttpStatus.CREATED);
	}
}
