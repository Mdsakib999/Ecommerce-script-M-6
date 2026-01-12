import { EnvelopeIcon, HomeIcon, MapPinIcon, PencilIcon, PhoneIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "sonner";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";
import { useAuth } from "../../context/AuthContext";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    district: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);

  const handleEditClick = () => {
    setFormData({
      name: user.name || "",
      phoneNumber: user.phoneNumber || "",
      district: user.district || "",
      address: user.address || ""
    });
    setIsEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(formData);
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <Button onClick={handleEditClick} leftIcon={<PencilIcon className="w-4 h-4" />}>
          Edit Profile
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-6 mb-8">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-cyan-500"
              referrerPolicy="no-referrer"
            />
          ) : (
            <UserCircleIcon className="w-24 h-24 text-gray-400" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
            {user?.isAdmin && (
              <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                <ShieldCheckIcon className="w-4 h-4" />
                Administrator
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <EnvelopeIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-gray-900 font-medium">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <PhoneIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-gray-900 font-medium">{user?.phoneNumber || "Not set"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <MapPinIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">District</p>
              <p className="text-gray-900 font-medium">{user?.district || "Not set"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <HomeIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-900 font-medium">{user?.address || "Not set"}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)} title="Edit Profile">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="e.g. 01700000000"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <select
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
              required
            >
              <option value="">Select District</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Barishal">Barishal</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Address
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              rows={3}
              placeholder="e.g. House 12, Road 5, Dhanmondi"
              required
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button type="submit" loading={loading}>
              Save Changes
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
