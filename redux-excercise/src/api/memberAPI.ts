import {
  MemberEntity,
  createDefaultMemberEntity,
  MemberDetails,
  createDefaultMemberDetails
} from "../model/member";
const octokit = require("@octokit/rest")();

class MemberAPI {
  async getAllMembersWithOctokit(
    organizationName: string
  ): Promise<MemberEntity[]> {
    try {
      const response = octokit.paginate("GET /orgs/:org/members", {
        org: organizationName
      });

      const apiResponse = await response;

      const getMembers = apiResponse.map(gitHubMember => {
        var member: MemberEntity = createDefaultMemberEntity();

        member.id = gitHubMember.id;
        member.login = gitHubMember.login;
        member.avatar_url = gitHubMember.avatar_url;

        return member;
      });

      return getMembers;
    } catch {
      error => console.log(error);
    }
  }

  async getMemberDetail(username: string): Promise<MemberDetails> {
    try {
      const response = octokit.users.getByUsername({ username });

      const apiResponse = await response;

      let member: MemberDetails = createDefaultMemberDetails();

      member.id = apiResponse.data.id;
      member.avatar_url = apiResponse.data.avatar_url;
      member.name = apiResponse.data.name;
      member.login = apiResponse.data.login;
      member.location = apiResponse.data.location;
      member.company = apiResponse.data.company;
      member.blog = apiResponse.data.blog;

      return member;
    } catch {
      error => console.log(error);
    }
  }
}

export const memberAPI = new MemberAPI();
