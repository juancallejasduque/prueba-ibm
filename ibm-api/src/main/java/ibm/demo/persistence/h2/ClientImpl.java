package ibm.demo.persistence.h2;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import ibm.demo.entity.Client;
import ibm.demo.persistence.constant.QryClientCnt;
import ibm.demo.persistence.dao.ClientDao;

/**
 * Dao implementation to Client entity.
 * 
 * @author juancallejasduque@gmail.com
 *
 */
@Repository
public class ClientImpl extends JdbcDaoSupport implements ClientDao {

	@Autowired
	DataSource dataSource;

	@PostConstruct
	private void initialize() {
		setDataSource(dataSource);
	}

	@Override
	public List<Client> getAllClients() {
		return getJdbcTemplate().query("SELECT * FROM " + QryClientCnt.TABLE_NAME, (rs, i) -> {

			return new Client(rs.getLong(QryClientCnt.ID_COL), rs.getString(QryClientCnt.NAME_COL),
					rs.getString(QryClientCnt.CITY_COL), rs.getString(QryClientCnt.ADDRESS_COL),
					rs.getString(QryClientCnt.PHONE_NUMBER_COL));
		});
	}

	@Override
	public long insert(Client client) {
		String sql = "INSERT INTO '" + QryClientCnt.TABLE_NAME + "' (" + QryClientCnt.NAME_COL + ", "
				+ QryClientCnt.CITY_COL + ", " + QryClientCnt.ADDRESS_COL + ", " + QryClientCnt.PHONE_NUMBER_COL
				+ ") VALUES (?, ?, ?, ?)";
		KeyHolder keyHolder = new GeneratedKeyHolder();
		getJdbcTemplate().update(sql,
				new Object[] { client.getFullName(), client.getCity(), client.getAddress(), client.getPhoneNumber() },
				keyHolder);
		return keyHolder.getKey().longValue();
	}

	@Override
	public Client findClientById(long clientId) {
		String sql = "SELECT * FROM " + QryClientCnt.TABLE_NAME + " WHERE " + QryClientCnt.ID_COL + " = ?";
		return (Client) getJdbcTemplate().queryForObject(sql, new Object[] { clientId }, new RowMapper<Client>() {
			@Override
			public Client mapRow(ResultSet rs, int rwNumber) throws SQLException {
				Client client = new Client(rs.getLong(QryClientCnt.ID_COL), rs.getString(QryClientCnt.NAME_COL),
						rs.getString(QryClientCnt.CITY_COL), rs.getString(QryClientCnt.ADDRESS_COL),
						rs.getString(QryClientCnt.PHONE_NUMBER_COL));
				return client;
			}
		});
	}

	@Override
	public int delete(long clientId) {
		String sql = "DELETE FROM " + QryClientCnt.TABLE_NAME + " WHERE " + QryClientCnt.ID_COL + " = ?";
		return getJdbcTemplate().update(sql, new Object[] { clientId }, new int[] { Types.BIGINT });
	}

	@Override
	public int update(Client client) {
		String sql = "UPDATE " + QryClientCnt.TABLE_NAME + " set " + QryClientCnt.NAME_COL + " = ?, "
				+ QryClientCnt.CITY_COL + " = ?, " + QryClientCnt.ADDRESS_COL + " = ?,  "
				+ QryClientCnt.PHONE_NUMBER_COL + "=? WHERE " + QryClientCnt.ID_COL + " = ?";
		return getJdbcTemplate().update(sql,

				new Object[] {

						client.getFullName(), client.getCity(), client.getAddress(), client.getPhoneNumber(),
						client.getId()

				});

	}

}
